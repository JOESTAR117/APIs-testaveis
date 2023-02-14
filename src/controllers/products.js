class ProductsController {
    constructor(Products) {
        this.Product = Products
    }
    async get(req, res) {
        try {
            const products = await this.Product.find({})
            res.send(products)
        } catch (err) {
            res.status(400).send(err.message)
        }
    }
    async getById(req, res) {
        const {
            params: { id },
        } = req

        try {
            const product = await this.Product.find({ _id: id })
            res.send(product)
        } catch (err) {
            res.status(400).send(err.message)
        }
    }
    async create(req, res) {
        const product = new this.Product(req.body)

        await product.save()
        res.status(201).send(product)
    }
}

export default ProductsController
