import { Router } from 'express'
import ProductsController from '../controllers/products'
import Products from '../models/product'

const router = Router()
const productsController = new ProductsController(Products)

router.get('/', (req, res) => productsController.get(req, res))

export default router
