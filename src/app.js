import express, { json } from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/products', (req, res) =>
    res.send([
        {
            name: 'Default product',
            description: 'product description',
            price: 100,
        },
    ])
)

export default app
