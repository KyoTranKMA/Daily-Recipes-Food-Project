'use strict'

class AccessController {

    constructor() {
        this.signUp = this.signUp.bind(this);
    }

    signUp = async (req, res, next) => {
        try {
            console.log(`[P]:::signUp:`, req.body)
            
            res.status(201).json({
                code: '20001',
                metadata: {userid: 1}
            })  
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController();
