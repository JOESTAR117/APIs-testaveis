import { Router } from 'express'

const router = Router()

router.get('/', (req, res) =>
    res.send([
        {
            name: 'Default product',
            description: 'product description',
            price: 100,
        },
    ])
)

export default router
