
const path = require('path')  // using path module to join views render 
const express = require('express'); // importing a library from node module
const session = require('express-session'); 
const exphbs = require('express-handlebars');
const passport = require('passport');
const hbs = exphbs.create({});

require('./config/passport', passport);

hbs.handlebars.registerHelper("restaurantCard", function(item, index) {
  return new hbs.handlebars.SafeString(`
    <div id="card-${index}" class="card border-3px hidden">
      <img src="${item.image}" alt="picture of restaurant" crossOrigin="Anonymous" />
      <div class="container">
          <h4><b>${item.title}</b></h4>
          <p>${item.description}</p>
      </div>
      <div class="sm-col-6">
          <button id="no-btn-${index}" class="mybtn mb-3">No</button>
          <button id="yes-btn-${index}" class="mybtn mb-3">Yes</button>
      </div>
    </div>
  `);
});

hbs.handlebars.registerHelper("likedCards", function(item, index) {
  return new hbs.handlebars.SafeString(`
    <div id="card-${index}" class="card border-3px hidden col-md-4">
      <img src="${item.image}" alt="picture of restaurant" crossOrigin="Anonymous" />
      <div class="container">
          <h4><b>${item.title}</b></h4>
          <p>${item.description}</p>
      </div>
    </div>
  `);
});


const app = express(); // can use to chain express methods 
const PORT = process.env.PORT || 3001; // heroku port 

const sequelize = require("./config/connection");
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    expires: 60 * 1000,
  },
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
app.use(express.static(path.join(__dirname, '/public'))); // instruct server to make certain files readyly avaliable and not gate behind an endpoint 
app.use(require('./controllers'));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(passport.initialize());
app.use(passport.session());

// login page route 
// app.get('/login', (req, res, next) => {
//     res.render([path.join(__dirname, '')]);  
// })

// // home page

// app.get('/', (req, res, next) => {
//     res.render([path.join(__dirname, '')]);  
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
