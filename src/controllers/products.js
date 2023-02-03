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
}

export default ProductsController
