const util = require('util');
const Authentication = require('./authentication');
// const bcrypt = require('bcrypt');
const saltRounds = 10;

class handleAuthentication extends Authentication {
    constructor(props) {
        super(props);
    }

    
    static testFunction() {
        return new Promise((res, rej) => {
            res.json('hello')
        })      
    }
 
    async login(req, res) {
        const checkUser = await super.checkIfUserExists(req.body);
        if(!checkUser.length) res.status(404).json(checkUser)
        
        //log the user in with jwt
        
    }
}

module.exports = new handleAuthentication();