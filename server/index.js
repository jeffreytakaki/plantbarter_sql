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
const root = require('path').join(__dirname, 'client', 'build')

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


app.use(express.static(root));

passportConfig(passport); //get local strategies from passport
app.use(passport.initialize());
app.use(passport.session());

app.post('/signup', passport.authenticate('local-signup'), (req, res) => {
  res.json(req.user)
});
app.post('/login', passport.authenticate('local-login'), (req, res) => {
    console.log(req.user.username)
    const token = jwt.sign({id: req.user.username}, jwtConfig.secret)
    res.status(200).json(
        {
            auth: true,
            token,
            user: req.user
        }
    )
});

app.post('/logout', (req, res) => {
    console.log('logout 1')
    
    return res.status(200).json([]);
    // req.session.destroy(function (err) {
    //     // res.redirect('/'); //Inside a callback… bulletproof!
    //     return res.status(200).json({status:'success'});
    //   });
});

// get all plants
app.get('/plants', function (req, res) {
    const q = `SELECT * FROM plants`;
    connection.query(q, (error, results) => {
        if (error) res.json(error);
        res.json(results);
    })
});

// get plant
app.get('/plant/:plant_id', function (req, res) {
    console.log('req.params', req.params)
    const q = `SELECT * FROM plants WHERE plant_id = ${req.params.plant_id};`;
 
    connection.query(q, (error, results) => {
        if (error) res.json(error);

        res.json(results);
    })
});

app.use('/profile', passport.authenticate('jwt'), usersplants);
app.use('/users', passport.authenticate('jwt'), users);
app.use('/plant', passport.authenticate('jwt'), plants);

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});



