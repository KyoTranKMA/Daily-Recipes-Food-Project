'use strict'
const mongoose = require('mongoose')

const connectString = 'mongodb://localhost:27017'

mongoose.connect( connectString).then( _ => console.log('Connect Success')).catch(err => console.error('Connect Fail'))

module.exports = mongoose

