const express = require('express');
const router = express.Router();
const passport = require('passport');
const connection = require('../database_connect');
const User = require("../models/User");
const Plant = require('../models/Plant');

// GET USER =============================================================
// we use post here because we need to pass it email/pw, which later should be salted/jwt. maybe thru cookie values
router.get('/findUser', function (req, res) {
    connection.query(`SELECT * FROM users WHERE users.user_id = ${req.user.user_id}`, (error, results) => {
        if (error) res.json({statusCode: 404, message: 'user not logged in'});
        res.json({user: results})
    });
});

// UPDATE USER =============================================================
router.put('/edit', (req, res) => {
    let setColumns = '';
    let count = 0;
    for (let key in req.body) {
        if(count > 0) setColumns +=','
        setColumns += `${key}='${req.body[key]}'`
        count++;
    }
    const updateQuery = `UPDATE users SET ${setColumns} WHERE user_id = ${req.user.user_id};`;
    connection.query(updateQuery, (error, results) => {
        if (error) res.json(error);

       res.json(results)
    });
});


module.exports = router;
