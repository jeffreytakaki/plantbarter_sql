const express = require('express');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connection = require('./database_connect');
const passportConfig = require('./authentication/passportConfig');
const checkSession = require('./authentication/checkSession');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const plants = require('./routes/plants');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);




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

var session_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Tardy820!!',
    database: 'plantBarter_01'
};

const sessionStore = new MySQLStore(session_options);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: sessionStore
}))

passportConfig(passport); //get local strategies from passport

app.use(passport.initialize());
app.use(passport.session());


// Routes
// viewed at http://localhost:5000
// app.get('*', function(req, res) {
//     res.sendFile(__dirname + '/client/index.html')
// });

app.post('/signup', passport.authenticate('local-signup'), (req, res) => {
  res.json(req.user)
});
app.post('/login', passport.authenticate('local-login'), (req, res) => {
    console.log(this.req)
    res.status(200).json(req.user)
});
app.get('/logout', (req, res) => {
  console.log('logout')
  req.logout();
  return res.status(200).json({status:'success'});
});

// get all plants
app.get('/plants', checkSession, function (req, res) {
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

app.use('/user', passport.authenticate('local-login'), users);
app.use('/plant', passport.authenticate('local-login'), plants);

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});



