import Products from '../../../src/models/product'

describe('Routes: Products', () => {
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100,
    }
    const expectedProduct = {
        __v: 0,
        _id: '56cb91bdc3464f14678934ca',
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
    })
})
