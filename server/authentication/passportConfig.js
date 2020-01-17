const flash = require('express-flash-messages')
const connection = require('../database_connect');				
const LocalStrategy   = require('passport-local').Strategy;
const handleAuth = require('./handleAuth');
const User = require("../models/User");

// expose this function to our app using module.exports
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        console.log('serialize session', user.user_id);
        done(null, user.user_id);
    }); 
    passport.deserializeUser(function(user, done) {
        console.log('deserialize')
        let q = `SELECT * FROM users WHERE email = '${req.body.email}'`;

        connection.query(q, (error, results) => {
            if(error) {
                console.log('deserialize error', error)
                return done(null, error)
            }
            console.log('deserialize user', results)
            return done(null,results.insertId);
        });        
    });

 	// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // console.log('req', req);
		// find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists

        let newUserMysql = new Object();       
        newUserMysql.first_name = req.body.first_name;
        newUserMysql.last_name    = req.body.last_name;
        newUserMysql.username    = req.body.username;
        newUserMysql.email    = req.body.email;
        newUserMysql.password = password; // use the generateHash function in our user model

        let q = `INSERT users(first_name, last_name, email, user_name, password) VALUES ('${newUserMysql.first_name}', '${newUserMysql.last_name}', '${newUserMysql.email}', '${newUserMysql.username}', '${newUserMysql.password}');`;
        console.log('local sign in', q);
        connection.query(q, (error, results,field) => {
            if(error) {
                console.log('error creating user', error.error)
                return done(null, error);
            }
            
            console.log('results.insertId', results.insertId)
            console.log('field', field)
            return done(null,results.insertId);
        })

    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        let q = `SELECT * FROM users WHERE users.email = '${req.body.email}' AND users.password = '${req.body.password}';`;

        connection.query(q, (error, results,field) => {
            if(error) {
                console.log('second')
                console.log('error authenticating user', error.error)
                // return done(null, error);
            }
            
            if(results.length) {
                console.log('results', results[0])
                return done(null,results[0]);
            }

            return done(null, false);
        });

    }));

};