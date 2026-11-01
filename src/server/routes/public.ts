import { Router } from 'express'

export const publicRouter = Router()

// info portal statis untuk header/footer landing page
publicRouter.get('/portal', (_req, res) => {
  res.json({
    name: 'VueBundle NoAuth',
    tagline: 'Portal demo tanpa auth, backend berupa gateway passthrough.',
  })
})
