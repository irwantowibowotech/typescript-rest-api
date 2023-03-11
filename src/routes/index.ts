import { Application, Router } from 'express'
import HealthRouter from './health'
import ProductRouter from './product'

const _routes: Array<[string, Router]> = [
  ['/health', HealthRouter],
  ['/product', ProductRouter]
]

export const routes = (app: Application) => {
  for (const router of _routes) {
    const [url, route] = router

    app.use(url, route)
  }
}
