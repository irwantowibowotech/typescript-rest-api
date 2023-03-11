import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Data berhasil diload',
    data: [
      {
        id: 1,
        name: 'Sepatu Mantab Jiwa',
        price: 1800000,
        stock: 10,
        variant: [
          {
            id: 1,
            label: 'Warna',
            value: 'Merah'
          },
          {
            id: 12,
            label: 'Ukuran',
            value: 41
          }
        ]
      }
    ]
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success add new product')
  res.status(201).send({
    message: 'Berhasil menambahkan data baru',
    data: req.body
  })
})

export default ProductRouter
