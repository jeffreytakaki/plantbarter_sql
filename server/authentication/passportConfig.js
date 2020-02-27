const flash = require('express-flash-messages')
const connection = require('../database_connect');
const pwHelpers = require('./encryptPassword');
const jwtConfig = require('./jwtConfig');
const LocalStrategy   = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

// expose this function to our app using module.exports
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        // console.log('serialize session', user.user_id);
        done(null, user);
    }); 
    passport.deserializeUser(function(user, done) {
        console.log('deserialize')
        console.log('user', user)

        let q = `SELECT * FROM users WHERE email = '${user.email}'`;

        connection.query(q, (error, results) => {
            if(error) {
                // console.log('deserialize error', error)
                return done(null, error)
            }
            // console.log('deserialize user', results)
            return done(null,results[0].user_id);
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
    async function(req, email, password, done) {
        // console.log('req', req);
		// find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists

        let newUserMysql = new Object();       
        newUserMysql.first_name = req.body.first_name;
        newUserMysql.last_name    = req.body.last_name;
        newUserMysql.username    = req.body.username;
        newUserMysql.email    = req.body.email;
        newUserMysql.password = await pwHelpers.encryptPassword(password); // use the generateHash function in our user model

        let q = `INSERT INTO users(first_name, last_name, email, username, password) VALUES ('${newUserMysql.first_name}', '${newUserMysql.last_name}', '${newUserMysql.email}', '${newUserMysql.username}', '${newUserMysql.password}');`;
        connection.query(q, (error, results,field) => {
            if(error) {
                return done(error);
            }
            if (results.insertId) {
                connection.query(`SELECT * FROM users WHERE users.email='${req.body.email}';`, (error, results) => {
                    console.log('error', error)
                    console.log('results[0]', results)
                    return done(null,results[0]);
                })
            } else {
                console.log('error retrieving newly created user');
                return done(null);
            }
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
    async function(req, email, password, done) { // callback with email and password from our form
        let q = `SELECT * FROM users WHERE users.email = '${req.body.email}';`;
        console.log('q', q)
        connection.query(q, (error, results,field) => {
            if(error) return done(null, error);
            
            if(results.length) {
                // Load hash from your password DB.
                bcrypt.compare(req.body.password, results[0].password, function(err, res) {
                    
                    if(res) return done(null,results[0]);
                    
                    return done(null, false);
                });
            }
            
        });

    }));

    // =========================================================================
    // PASSPORT JWT =============================================================
    // =========================================================================
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
    opts.secretOrKey = jwtConfig.secret;
    passport.use('jwt', new JwtStrategy(opts, 
        async function(jwt_payload, done) {
            const q = `SELECT * FROM users WHERE users.username = '${jwt_payload.id}';`;
            connection.query(q, (error, results) => {
                if(error) return done(null, error);
                
                if(results.length) return done(null,results[0]);

                return done(null, false);
                
            });
        })
    );

};