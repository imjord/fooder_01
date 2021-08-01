const path = require('path')  // using path module to join views render 
const express = require('express'); // importing a library from node module
const session = require('express-session'); 
const exphbs = require('express-handlebars');




const app = express(); // can use to chain express methods 
const PORT = process.env.PORT || 3001; // heroku port 

const sequelize = require("./config/connection");
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware 
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming json data 
app.use(express.static(path.join(__dirname, 'public'))); // instruct server to make certain files readyly avaliable and not gate behind an endpoint 

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server live'));
});
