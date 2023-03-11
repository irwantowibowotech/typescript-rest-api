import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import { routes } from './routes'
import { logger } from './utils/logger'

const app: Application = express()
const port: number = 4000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Controll-Allow-Origin', '*')
  res.setHeader('Access-Controll-Allow-Methods', '*')
  res.setHeader('Access-Controll-Allow-Headers', '*')
  next()
})

// cors access handler
app.use(cors())

routes(app)

app.listen(port, () => {
  logger.info('Server berjalan di port', port)
})
