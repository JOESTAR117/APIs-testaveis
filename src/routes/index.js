import { Router } from 'express'
import productsRoute from './products'

const router = Router()

router.use('/products',productsRoute)
router.get('/', (req, res) => res.send('Hello World!'))

export default router
