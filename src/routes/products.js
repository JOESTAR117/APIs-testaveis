import { Router } from 'express'
import ProductsController from '../controllers/products'

const router = Router()
const productsController = new ProductsController()

router.get('/', (req, res) => productsController.get(req, res))

export default router
