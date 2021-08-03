const router = require('express').Router();
const { User } = require('..../models/User.js');


// router.get('/api/user', (req, res) => {});


// router.get('/:id', (req, res) => {});


// router.post('/', (req, res) => {});

router.post('/api/user/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
    req.session.save(() => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;

    res.json(dbUserData);
  })
})
})




// router.put('/like', (req, res) => {

// });

// router.put('/:id', (req, res) => {

//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     })
// });

// router.delete('/:id', (req, res) => {});

module.exports = router;