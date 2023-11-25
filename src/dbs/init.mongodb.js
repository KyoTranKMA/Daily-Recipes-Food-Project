'use strict'
const mongoose = require('mongoose')
const { mountpath } = require('../app')

//require db env from file config 
const { db: { host, port, name }} = require('../configs/config.mongodb.js') 

const connectString = `mongodb://${host}:${port}/${name}`
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

        mongoose.connect(connectString).then( () => console.log('Connect to MongoDB Success!',countConnect() ))
        .catch(err => console.error('Connect to MongoDB Fail'))
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


