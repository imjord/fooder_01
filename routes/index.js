// const express = require('express'); // importing a library from node module
// const app = express(); // can use to chain express methods 
// const path = require('path')  // using path module to join views render 
// const PORT = process.env.port || 3001; // heroku port 



const router = require('express').Router(); // instance of router to declare routes in any file 






// app.set('views', path.join(__dirname, 'views'))   // join views dir


// app.get('/home', (req, res, next) => {
//     res.send('');  
// })

// // home page



// // 
// app.get('/resturants', (req,res, next) => {
//     const data = {

//     }

//     res.json(data)
// }






// app.listen(3001, () => {
//     console.log('server live');
// })


module.exports  = router;