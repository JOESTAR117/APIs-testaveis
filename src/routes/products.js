import { Router } from 'express'
import ProductsController from '../controllers/products'
import Products from '../models/product'

const router = Router()
const productsController = new ProductsController(Products)

router.get('/', (req, res) => productsController.get(req, res))

router.get('/:id', (req, res) => productsController.getById(req, res))

router.post('/', (req, res) => productsController.create(req, res))

router.put('/:id', (req, res) => productsController.update(req, res));

router.delete('/:id', (req, res) => productsController.remove(req, res));

export default router
