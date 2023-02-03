class ProductsController {
    constructor(Products) {
        this.Product = Products
    }
    async get(req, res) {
        const products = await this.Product.find({})
        res.send(products)
    }
}

export default ProductsController
