import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res, next) => {
    console.log('route / called')
    res.send('Hello World!')
})

app.use('/users', (req, res, next) => {
    console.log('Will run before any route')
    next()
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
