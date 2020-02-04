const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const userModel = require('./models/User');
const plantModel = require('./models/Plant');

// https://flaviocopes.com/node-mysql/
const options = {
    user: 'root',
    password: 'Tardy820!!',
    database: 'plantBarter_01',
    host:   '127.0.0.1',
    multipleStatements: true
}

const connection = mysql.createConnection(options);

connection.connect(error => {
    if(!!error){
        console.log('error', error);
    } else {
        console.log('Connected!');
        let queries = fs.readFileSync(path.join(__dirname, '/models/Model.sql'), { encoding: "UTF-8" }).split(";\n");
        for (let query of queries) {
            query = query.trim();
            if (query.length !== 0 && !query.match(/\/\*/)) {
                connection.query(query, function (err, sets, fields) {
                    if (err) {
                        console.log(`Importing failed for Mysql Database  - Query:${query}`);
                    } else {
                        // console.log(`Importing Mysql Database  - Query:${query}`);
                    }
                });
            }
        }
    } 
});

module.exports = connection;