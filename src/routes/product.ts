import { Router, Request, Response } from 'express'

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

export default ProductRouter
