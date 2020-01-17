const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = (userPassword) => {
    bcrypt.hash(userPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
      });
}




module.exports = encryptPassword;