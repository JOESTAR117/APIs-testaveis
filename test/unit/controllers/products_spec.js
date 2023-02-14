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
    const defaultRequest = {
        params: {},
    }

    describe('get() products', () => {
        it('should return a list of products', async () => {
            const response = {
                send: sinon.spy(),
            }
            Products.find = sinon.stub()
            Products.find.withArgs({}).resolves(defaultProduct)

            const productsController = new ProductsController(Products)

            await productsController.get(defaultRequest, response)

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

            await productsController.get(defaultRequest, response)

            sinon.assert.calledWith(response.send, 'Error')
        })
    })

    describe('getById()', () => {
        it('should return one product', async () => {
            const fakeId = 'a-fake-id'
            const request = {
                params: {
                    id: fakeId,
                },
            }
            const response = {
                send: sinon.spy(),
            }
            Products.find = sinon.stub()
            Products.find.withArgs({ _id: fakeId }).resolves(defaultProduct)
            const productsController = new ProductsController(Products)
            await productsController.getById(request, response)
            sinon.assert.calledWith(response.send, defaultProduct)
        })
    })

    describe('create() product', () => {
        it('should save a new product successfully', async () => {
            const requestWithBody = Object.assign(
                {},
                { body: defaultProduct[0] },
                defaultRequest
            )
            const response = {
                send: sinon.spy(),
                status: sinon.stub(),
            }
            class fakeProduct {
                save() {}
            }
            response.status.withArgs(201).returns(response)
            sinon.stub(fakeProduct.prototype, 'save').withArgs().resolves()

            const productsController = new ProductsController(fakeProduct)

            await productsController.create(requestWithBody, response)
            sinon.assert.calledWith(response.send)
        })
        context('when an error occurs', () => {
            it('should return 422', async () => {
                const response = {
                    send: sinon.spy(),
                    status: sinon.stub(),
                }
                class fakeProduct {
                    save() {}
                }
                response.status.withArgs(422).returns(response)
                sinon
                    .stub(fakeProduct.prototype, 'save')
                    .withArgs()
                    .rejects({ message: 'Error' })
                
                const productsController = new ProductsController(fakeProduct)

                await productsController.create(defaultRequest,response)
                sinon.assert.calledWith(response.status, 422)
            })
        })
    })
})
