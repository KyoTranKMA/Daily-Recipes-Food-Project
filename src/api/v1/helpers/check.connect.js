'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const second = 5000

// count Connections of mongoose
const countConnect = () => {
    const count = mongoose.connections.length
    console.log(`Number connect: ${count}`)
}

const caculate = () => {
    const numConnect = mongoose.connections.length
    const numCore = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    
    return { numConnect,numCore,memoryUsage }
}

// check loading of db
const checkLoading = () => {
    setInterval( () => { 
        const result = caculate()
        console.log(`Num Core: ${result.numCore}`),
        console.log(`Memory Used: ${result.memoryUsage / 1024 /1024 } MB `)
    },second)
}


module.exports = {
    countConnect
}


