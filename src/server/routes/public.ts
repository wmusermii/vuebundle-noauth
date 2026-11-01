// src/server/routes/public.ts — ganti jadi baca DB
import { Router } from 'express'
import { pool } from '../connector/db'

export const publicRouter = Router()

publicRouter.get('/portal', async (_req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT param_key, value FROM gateway.parameters WHERE group_code = 'portal'`
    )
    const p = Object.fromEntries(rows.map((r) => [r.param_key, r.value]))
    res.set('Cache-Control', 'no-store')
    res.json({
      name: p.name || 'VueBundle NoAuth',
      maintenanceMode: p.maintenance_mode === 'true',
      supportEmail: p.support_email || '',
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Gagal memuat info portal' })
  }
})