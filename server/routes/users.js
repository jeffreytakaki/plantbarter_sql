const express = require('express');
const router = express.Router();
const passport = require('passport');
const connection = require('../database_connect');
const User = require("../models/User");
const Plant = require('../models/Plant');

// GET USER =============================================================
// we use post here because we need to pass it email/pw, which later should be salted/jwt. maybe thru cookie values
router.post('/', function (req, res) {
    connection.query(`SELECT * FROM users WHERE users.user_id = ${req.user}`, (error, results) => {
        if (error) res.json(error);
        res.json(results)
    });
});

// UPDATE USER =============================================================
router.put('/:user_id', (req, res) => {
    console.log('req.user', req.user)
    connection.query(`SELECT * FROM users WHERE users.user_id = ${req.user}`, (error, results) => {
        if (error) res.json(error);

        let updateColumns = [];
        for (const item in req.body) {
            updateColumns.push(`${item} = '${req.body[item]}'`);
        }

        const valuesQuery = updateColumns.toString();
        connection.query(`UPDATE users SET ${valuesQuery} WHERE user_id = ${req.user};`, (error, results) => {
            console.log('results', results)
            res.json(results)
        })
        
    });
});


// GET USER PLANTS =============================================================
router.post('/:user_id/plants', function (req, res) {
    let q = `SELECT * FROM plants WHERE plant_id IN (SELECT plant_id FROM users_plants WHERE user_id = ${req.user});`;
    connection.query(q, (error, results) => {
        if(error) res.json(error);

        res.json(results);
    });
});



module.exports = router;
