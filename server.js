const path = require('path')  // using path module to join views render 
const express = require('express'); // importing a library from node module
const session = require('express-session'); 
const exphbs = require('express-handlebars');
const hbs = require('handlebars');
const fs = require('fs');

const app = express(); // can use to chain express methods 
const PORT = process.env.port || 3001; // heroku port 

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);



// middleware 
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming json data 
app.use(express.static('public')); // instruct server to make certain files readyly avaliable and not gate behind an endpoint 


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// app.set('views', path.join(__dirname, 'views'))   // join views dir









// login page route 
app.get('/login', (req, res, next) => {
    res.sendFile([path.join(__dirname, '')]);  
})

// home page

app.get('/', (req, res, next) => {
    res.sendFile([path.join(__dirname, '')]);  
})

// wildcard route 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
  });



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server live'));
  });
