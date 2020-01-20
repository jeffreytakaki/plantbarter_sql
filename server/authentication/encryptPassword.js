const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = (userPassword) => {
    const passwordText = userPassword.toString();
    console.log('passwordText',passwordText)
    return new Promise((resolve, reject) => {
        bcrypt.hash(userPassword, saltRounds, (err, hash) => {
            // Store hash in your password DB.
            if (err) reject(err);
            
            resolve(hash);
        });
    })
    

};

const unhashPW = async (password) => {
    //... fetch user from a db etc.
 
    const match = await bcrypt.compare(password, user.passwordHash);
 
    if(match) {
        //login
    }
 
    //...
}




module.exports = {encryptPassword, unhashPW};