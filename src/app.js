import express from 'express'
import routes from './routes'
import connectDatabase from './database/db.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

connectDatabase()
app.use(express.json())
app.use('/', routes)

export default app
