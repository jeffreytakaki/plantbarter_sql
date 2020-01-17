const connection = require('../database_connect');

class Authentication {
    constructor() {

    }
    checkIfUserExists(req) {    

        return new Promise(function(resolve) {
            let query = `SELECT * FROM users WHERE users.email = '${req.email}'`;
            console.log('query', query)
            connection.query(query, (err, results, field) => {
                if (err) throw new Error(err); 

                console.log('results', results)
                resolve(results) 
            });
        });

    }
}

module.exports = Authentication;