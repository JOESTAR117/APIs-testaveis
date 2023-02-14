import Products from '../../../src/models/product'

describe('Routes: Products', () => {
    const defaultId = '56cb91bdc3464f14678934ca'
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100,
    }
    const expectedProduct = {
        __v: 0,
        _id: defaultId,
        name: 'Default product',
        description: 'product description',
        price: 100,
    }
    beforeEach(async () => {
        await Products.deleteMany()

        const product = new Products(defaultProduct)
        product._id = '56cb91bdc3464f14678934ca'
        return await product.save()
    })
    afterEach(async () => await Products.deleteMany())

    describe('GET / products', () => {
        it('should return a list of products', (done) => {
            request.get('/products').end((err, res) => {
                expect(res.body).to.eql([expectedProduct])
                done(err)
            })
        })
        describe('GET / products', () => {
            context('when an id is specified', (done) => {
                it('should return a list of products', (done) => {
                    request.get(`/products/${defaultId}`).end((err, res) => {
                        expect(res.statusCode).to.eql(200)
                        expect(res.body).to.eql([expectedProduct])
                        done(err)
                    })
                })
            })
        })
    })

    describe('POST/products', () => {
        context('when posting a product', () => {
            it('should return a new product with status code 201', (done) => {
                const customId = '56cb91bdc3464f14678934ba'
                const newProduct = Object.assign(
                    {},
                    { _id: customId, __v: 0 },
                    defaultProduct
                )

                const expectedSavedProduct = {
                    __v: 0,
                    _id: customId,
                    name: 'Default product',
                    description: 'product description',
                    price: 100,
                }
                request
                    .post('/products')
                    .send(newProduct)
                    .end((err, res) => {
                        expect(res.statusCode).to.eql(201)
                        expect(res.body).to.eql(expectedSavedProduct)
                        done(err)
                    })
            })
        })
    })
    describe('PUT/ products/:id', () => {
        context('when editing a product', () => {
            it('should update the product and return 200 as status code', done => {
                const customProduct = {
                    name: 'Custom name',
                }
                const updatedProduct = Object.assign(
                    {},
                    customProduct,
                    defaultProduct
                )

                request
                    .put(`/products/${defaultId}`)
                    .send(updatedProduct)
                    .end((err, res) => {
                        expect(res.status).to.eql(200)
                        done(err)
                    })
            })
        })
    })
})
