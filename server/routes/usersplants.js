const express = require('express');
const router = express.Router();
const passport = require('passport');
const connection = require('../database_connect');
const User = require("../models/User");
const Plant = require('../models/Plant');

// GET USER PLANTS =============================================================
router.get('/plants', function (req, res) {
    console.log('req.user', req.user.username)
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

            let check = true;
            // add logic to check if plant assigned to user already
            results.forEach(value => {
                if( value.plant_id == req.body.plant_id) {
                    check = false;
                }
            })
            if(check) {
                const insertQuery = `INSERT into users_plants (user_id, plant_id) VALUES (${user_id}, ${req.body.plant_id});`;
                // if not, add the plant
                connection.query(insertQuery, (error, results) => {
                    console.log('error')
                    if (error) res.json(error)
                    res.json(results);
                })
            } else {
                res.json({message: 'Plant already added to users list!'});
            }

        })
        
    })
});


// DELETE USER PLANT =============================================================
router.delete('/plant/:plant_id', function (req, res) {
    const getUserId = `SELECT user_id FROM users WHERE username = '${req.user.username}';`;
    // get user id
    connection.query(getUserId, (error, results) => {
        if(error) res.json(error);
        const user_id = results[0].user_id;
        const q = `SELECT * FROM users_plants WHERE user_id = ${user_id};`;
        // find all plants from user
        connection.query(q, (error, results) => {
            if(error) res.json(error);

            const deleteQuery = `DELETE from users_plants WHERE user_id = ${user_id} AND plant_id = ${req.params.plant_id};`;
            connection.query(deleteQuery, (error, results) => {
                if(error) res.json(error);

                res.json({response: results.affectedRows, plant_id: req.params.plant_id} )

            })

        })
    })
});


module.exports = router;
