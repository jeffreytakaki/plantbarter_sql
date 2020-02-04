const express = require('express');
const router = express.Router();
const passport = require('passport');
const connection = require('../database_connect');
const User = require("../models/User");
const Plant = require('../models/Plant');

// GET USER PLANTS =============================================================
router.get('/plants', function (req, res) {
    const getUserId = `SELECT user_id FROM users WHERE username = '${req.user.username}';`;
    
    connection.query(getUserId, (error, results) => {
        if(error) res.json(error);
        const user_id = results[0].user_id;
        let q = `SELECT * FROM plants WHERE plant_id IN (SELECT plant_id FROM users_plants WHERE user_id = ${user_id});`;
        connection.query(q, (error, results) => {
            if(error) res.json(error);
            res.json(results);    
        });
    });
});

// CREATE USER PLANTS =============================================================
router.post('/plant/add', function (req, res) {
    const getUserId = `SELECT user_id FROM users WHERE username = '${req.user.username}';`;
    // get user id
    connection.query(getUserId, (error, results) => {
        if(error) res.json(error);
        const user_id = results[0].user_id;
        const q = `SELECT * FROM users_plants WHERE user_id = ${user_id};`;

        // find all plants from user
        connection.query(q, (error, results) => {
            if(error) res.json(error);

            // add logic to check if plant assigned to user already
            results.forEach(value => {
                console.log('value',value)
            })
            
            // if not, add the plant
            connection.query(q, (error, results) => {

            })
            
            res.json(results);    
        })
        
    })
});



module.exports = router;
