// src/server/routes/theme.ts  (route PUBLIK, tanpa auth — pasang sebelum requireAuth)
import { Router } from 'express'
import { pool } from '../connector/db'

export const publicThemeRouter = Router()

publicThemeRouter.get('/', async (_req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT param_key, value FROM gateway.parameters WHERE group_code = 'themes'`
    )
    res.set('Cache-Control', 'no-store')
    res.json(Object.fromEntries(rows.map((r) => [r.param_key, r.value])))
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Gagal memuat tema' })
  }
})