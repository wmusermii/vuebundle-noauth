import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'

import { publicRouter } from './routes/public'
import { gatewayRouter } from './routes/gateway'

const app = express()
app.set('trust proxy', Number(process.env.TRUST_PROXY ?? 0))

app.use(helmet({ contentSecurityPolicy: false }))
app.use(express.json())
app.use(cookieParser())

// rate limit khusus gateway, karena endpoint ini menembus ke backend lain
const gatewayLimiter = rateLimit({ windowMs: 60_000, limit: 120 })

app.use('/api/public', publicRouter)
app.use('/api/gateway', gatewayLimiter, gatewayRouter)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

// Production: layani hasil build Vue dari dist/client (satu build, satu proses)
const clientDir = path.resolve(__dirname, '../client')
if (fs.existsSync(path.join(clientDir, 'index.html'))) {
  app.use(express.static(clientDir))
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) return next()
    res.sendFile(path.join(clientDir, 'index.html'))
  })
}

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err)
  res.status(500).json({ message: 'Terjadi kesalahan pada server' })
})

const PORT = Number(process.env.PORT ?? 3000)
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`))
