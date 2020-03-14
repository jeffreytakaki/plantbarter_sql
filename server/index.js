require('dotenv').config({path:  __dirname + '/../.env'});
const express = require('express');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connection = require('./database_connect');
const passportConfig = require('./authentication/passportConfig');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const plants = require('./routes/plants');
const usersplants = require('./routes/usersplants');
const cors = require('cors');
const jwtConfig = require('./authentication/jwtConfig');
const jwt = require('jsonwebtoken');
// create our Express app
const app = express();
app.use(cors());

// http request logger
app.use(morgan('dev'));
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ // Takes the raw requests and turns them into usable properties on req.body
	extended: true
}));
app.use(bodyParser.json());

if (process.env.NODE_ENV == 'production') {
    // Serve any static files, like build/static css and js files in CRA
    app.use(express.static(path.join(__dirname, 'client/build')));
}

// Handle the other passport stuff
passportConfig(passport); //get local strategies from passport
app.use(passport.initialize());
app.use(passport.session());

app.post('/signup',
function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        if (err) { 
            console.log('signup 1')
            // duplicated email/username catch
            res.json({auth: false, message: "username/email already in use. Please try a different one"})
            return false; 
        }
        if (!user) { 
            res.status(500).json({message:'hello2'}) 
            return false; 
        }

        req.logIn(user, function(err) {
            if (err) { return next(err); }
            const token = jwt.sign({id: req.user.username}, jwtConfig.secret)
            req.user.token = token;
            res.json(req.user)
        });

    })(req, res, next)
})  

app.post('/login', 
function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        console.log("start", err, user, info)
        if (err) { res.json({message: err}) }
        if (!user) { 
            // bad username or password catch
            res.json({message: 'username/password not found!'}) 
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            const token = jwt.sign({id: req.user.username}, jwtConfig.secret)
            req.user.token = token;
            res.json(req.user)
        });

    })(req, res, next)
});

app.post('/logout', (req, res) => {
    res.redirect(301, '/')
});

app.use('/api/v1/profile', passport.authenticate('jwt'), usersplants);
app.use('/api/v1/users', passport.authenticate('jwt'), users);
app.use('/api/v1/plants', plants);

if (process.env.NODE_ENV == 'production') {
    // Handles any requests that don't match the ones above
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
}

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});



