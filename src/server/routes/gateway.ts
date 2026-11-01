import { Router } from 'express'
import { resolveService, logServiceCall } from '../services/gatewayService'

export const gatewayRouter = Router()

const DEFAULT_SERVICE = process.env.GATEWAY_DEFAULT_SERVICE ?? 'core'
const DEFAULT_PATH = process.env.GATEWAY_DEFAULT_PATH ?? '/healthz'

// header/body/query yang boleh dipakai untuk menentukan tujuan passthrough
function pickServiceKey(req: import('express').Request): string {
  return (
    (req.header('x-service-key') ||
      (req.query.service as string) ||
      (req.body && typeof req.body === 'object' && req.body.service)) ??
    DEFAULT_SERVICE
  )
}

function pickTargetPath(req: import('express').Request, fallback: string): string {
  return (
    (req.header('x-service-path') ||
      (req.query.path as string) ||
      (req.body && typeof req.body === 'object' && req.body.path)) ??
    fallback
  )
}

// hop-by-hop headers tidak boleh diteruskan mentah-mentah
const STRIP_REQUEST_HEADERS = new Set([
  'host',
  'connection',
  'content-length',
  'x-service-key',
  'x-service-path',
])

gatewayRouter.all('/', async (req, res) => {
  const serviceKey = pickServiceKey(req)
  const started = Date.now()

  const svc = await resolveService(serviceKey)
  if (!svc) {
    return res.status(502).json({
      message: `Service '${serviceKey}' tidak ditemukan atau nonaktif`,
    })
  }

  const targetPath = pickTargetPath(req, svc.default_path)
  const targetUrl = new URL(targetPath, svc.base_url).toString()

  const headers: Record<string, string> = {}
  for (const [key, value] of Object.entries(req.headers)) {
    if (!value || STRIP_REQUEST_HEADERS.has(key.toLowerCase())) continue
    headers[key] = Array.isArray(value) ? value.join(', ') : value
  }

  const hasBody = !['GET', 'HEAD'].includes(req.method)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), svc.timeout_ms)

  try {
    const upstream = await fetch(targetUrl, {
      method: req.method,
      headers,
      body: hasBody ? JSON.stringify(req.body ?? {}) : undefined,
      signal: controller.signal,
    })

    const contentType = upstream.headers.get('content-type') ?? ''
    const payload = contentType.includes('application/json')
      ? await upstream.json().catch(() => null)
      : await upstream.text()

    void logServiceCall({
      service_key: serviceKey,
      method: req.method,
      target_path: targetPath,
      status_code: upstream.status,
      latency_ms: Date.now() - started,
      request_ip: req.ip,
    })

    res.status(upstream.status)
    if (typeof payload === 'string') res.send(payload)
    else res.json(payload)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Gagal menghubungi service tujuan'
    void logServiceCall({
      service_key: serviceKey,
      method: req.method,
      target_path: targetPath,
      latency_ms: Date.now() - started,
      request_ip: req.ip,
      error_message: message,
    })
    res.status(502).json({ message: `Passthrough ke '${serviceKey}' gagal: ${message}` })
  } finally {
    clearTimeout(timeout)
  }
})
