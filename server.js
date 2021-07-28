const path = require('path')  // using path module to join views render 
const express = require('express'); // importing a library from node module
const session = require('express-session'); 
const exphbs = require('express-handlebars');

const app = express(); // can use to chain express methods 
const PORT = process.env.port || 3001; // heroku port 

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.set('views', path.join(__dirname, 'views'))   // join views dir


app.get('/home', (req, res, next) => {
    res.send('');  
})

// home page


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server live'));
  });
