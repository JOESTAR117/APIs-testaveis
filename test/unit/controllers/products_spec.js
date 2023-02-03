import ProductsController from '../../../src/controllers/products'
import sinon from 'sinon'
import Products from '../../../src/models/product'

describe('Controllers: Products', () => {
    const defaultProduct = [
        {
            name: 'Default product',
            description: 'product description',
            price: 100,
        },
    ]

    describe('get() products', () => {
        it('should return a list of products', async () => {
            const request = {}
            const response = {
                send: sinon.spy(),
            }
            Products.find = sinon.stub()
            Products.find.withArgs({}).resolves(defaultProduct)

            const productsController = new ProductsController(Products)

            await productsController.get(request, response)

            sinon.assert.calledWith(response.send, defaultProduct)
        })
        it('should return 400 when an error occurs', async () => {
            const request = {}
            const response = {
                send: sinon.spy(),
                status: sinon.stub(),
            }
            response.status.withArgs(400).returns(response)
            Products.find = sinon.stub()
            Products.find.withArgs({}).rejects({ message: 'Error' })

            const productsController = new ProductsController(Products)

            await productsController.get(request, response)

            sinon.assert.calledWith(response.send, 'Error')
        })
    })
})
