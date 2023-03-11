import { Router, Request, Response } from 'express'

const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Mantab, kamu berhasil'
  })
})

export default HealthRouter
