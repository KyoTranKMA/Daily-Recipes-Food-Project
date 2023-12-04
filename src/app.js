const compression = require('compression')
const express = require('express')
const req = require('express/lib/request')
const { status } = require('express/lib/response')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()
const mongoose = require('./api/v1/databases/init.mongodb.js')
const { route } = require('./api/v1/routes/index.js')
// require enviroment  from .env
require('dotenv').config()


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// init db
mongoose


// int routes
app.use( '/', require('./api/v1/routes/index.js'));


// handling error


module.exports = app
