'use strict'

const signUpModel = require('../models/sign-up.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

class AccessService {

    static signUp = async ({ name, email, password }) => {
        console.log('test')
        try {

            // check account exists
            const accountUser = await signUpModel.findOne({ email }).lean()
            if(account) {
                return {
                    code: '226',
                    message: 'Email already registered!'
                }
            }
            // else create new Account and hash password with Salt = 10 (default value)

            const hashPassword = await bcrypt.hash(password, 10)
            
            const newAccount = await signUpModel.create({
                name, email, password: hashPassword                
            })

            if(newAccount){
                const {privateKey, publicKey } = crypto.generateKeyPairSync('rsa',{
                    modulusLength: 4096
                })
            }

            console.log({privateKey, publicKey})
        }
        catch(error) {


        }
    }

}

module.exports = AccessService.signUp