const compression = require('compression')
const express = require('express')
const req = require('express/lib/request')
const { status } = require('express/lib/response')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()
const mongoose = require('./dbs/init.mongodb.js')


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())


// init db
mongoose


// int routes
app.get('/', (req,res,next) => {
    return res.status(200).json({
        messeage: "Successfully!",
        status: "OK"
    })
})


// handling error


module.exports = app
