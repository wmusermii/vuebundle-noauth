import { pool } from '../connector/db'

export interface ServiceRecord {
  service_key: string
  name: string
  base_url: string
  default_path: string
  timeout_ms: number
  is_active: boolean
}

// cache ringan di memory supaya tidak query DB tiap request; TTL singkat agar
// perubahan di tabel services tetap terasa tanpa restart server
let cache: { data: Map<string, ServiceRecord>; expiresAt: number } | null = null
const CACHE_TTL_MS = 10_000

async function loadServices(): Promise<Map<string, ServiceRecord>> {
  if (cache && cache.expiresAt > Date.now()) return cache.data
  const { rows } = await pool.query<ServiceRecord>(
    `SELECT service_key, name, base_url, default_path, timeout_ms, is_active
     FROM gateway.services`,
  )
  const data = new Map(rows.map((r) => [r.service_key, r]))
  cache = { data, expiresAt: Date.now() + CACHE_TTL_MS }
  return data
}

export async function resolveService(serviceKey: string): Promise<ServiceRecord | null> {
  const services = await loadServices()
  const svc = services.get(serviceKey)
  if (!svc || !svc.is_active) return null
  return svc
}

export async function logServiceCall(entry: {
  service_key: string
  method: string
  target_path: string
  status_code?: number
  latency_ms?: number
  request_ip?: string
  error_message?: string
}) {
  try {
    await pool.query(
      `INSERT INTO gateway.service_logs
         (service_key, method, target_path, status_code, latency_ms, request_ip, error_message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        entry.service_key,
        entry.method,
        entry.target_path,
        entry.status_code ?? null,
        entry.latency_ms ?? null,
        entry.request_ip ?? null,
        entry.error_message ?? null,
      ],
    )
  } catch (err) {
    // logging tidak boleh menggagalkan request utama
    console.error('[gateway] gagal menulis service_logs:', err)
  }
}
