'use strict'

const mongoose = require('mongoose');

// Declare the Schema of the User model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength: 150,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    status:{
        type:String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    verify:{
        type: Boolean,
        default: false,
    }
    
});

//Export the model
module.exports = mongoose.model('User', userSchema); 