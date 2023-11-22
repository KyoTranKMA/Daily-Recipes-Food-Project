'use strict'
const mongoose = require('mongoose')
const { mountpath } = require('../app')

const connectString = 'mongodb://localhost:27017/home'
const { countConnect } = require('../helpers/check.connect.js')


class Database {
    constructor() {
        this.connect()
    }
    // connect
    connect(type = 'mongodb') {
        // check dev env
        if(1 === 1)
        {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true}) 
        }

        mongoose.connect(connectString).then( () => console.log('Connect Success!',countConnect() ))
        .catch(err => console.error('Connect Fail'))
    }   
    
    // Protect to only Data created
    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb


