
const path = require('path')  // using path module to join views render 
const express = require('express'); // importing a library from node module
const session = require('express-session'); 
const exphbs = require('express-handlebars');
const mysql = require('mysql2');
const hbs = exphbs.create({});




const app = express(); // can use to chain express methods 
const PORT = process.env.PORT || 3001; // heroku port 

const sequelize = require("./config/connection");
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// middleware 
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming json data 
app.use(express.static('public')); // instruct server to make certain files readyly avaliable and not gate behind an endpoint 
app.use(require('./controllers'));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// login page route 
// app.get('/login', (req, res, next) => {
//     res.render([path.join(__dirname, '')]);  
// })

// // home page

// app.get('/', (req, res, next) => {
//     res.render([path.join(__dirname, "views/homepage.handlebars")]);  
// })

// // wildcard route 
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, ''));

//   });




  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server live'));
  });
