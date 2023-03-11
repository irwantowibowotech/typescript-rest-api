import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: 'Berhasil mengakses routing home'
  })
})

app.listen(port, () => {
  console.log('Server berjalan di port', port)
})
