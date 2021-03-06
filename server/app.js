const express = require('express')
const app = express()
const router = require('./routes')
const errHandler = require('./middlewares/errHandler')
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errHandler)

module.exports = app