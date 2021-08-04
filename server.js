const path = require('path')  // using path module to join views render 
const express = require('express'); // importing a library from node module
const session = require('express-session'); 
const exphbs = require('express-handlebars');
const fs = require('fs');
const mysql = require('mysql2');




const app = express(); // can use to chain express methods 
const PORT = process.env.port || 3001; // heroku port 

const sequelize = require("./config/connection");
// const { defaultValueSchemable } = require('sequelize/types/lib/utils');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



// middleware 
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming json data 
app.use(express.static('public')); // instruct server to make certain files readyly avaliable and not gate behind an endpoint 


// connect to mysql database 

const hbs = exphbs.create();
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


  

// select a single query 
app.get('/restaurants/:id', (req, res) => {
    const sql = `SELECT * FROM restaurants WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });

// Delete a query
app.delete('/restaurants/:id', (req, res) => {
    const sql = `DELETE FROM restaurants WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Resturant not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });



// route to get db 

app.get('/resturants', (req, res) => {
    const sql = `SELECT * FROM fooder_db`;
    db.query(sql, (err, rows) => {
        if(err){
            res.status(500).json({error : err.message});  // if theres an error grabing a query 
            return;
        }
        res.json(
            {
                message: 'success',
                data: rows,
            }
        )

    })
})



  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server live'));
  });
