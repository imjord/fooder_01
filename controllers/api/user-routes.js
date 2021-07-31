const router = require('express').Router();
const { User } = require('..../models/User.js');


router.get('/api/user', (req, res) => {});


router.get('/:id', (req, res) => {});


router.post('/', (req, res) => {});

router.post('/api/user/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData){
            res.status(400).json({message: 'No user with that email address'});
            return;

        }
        res.json({ user: dbUserData });

        // verify user 
    })

})

router.put('/:id', (req, res) => {

    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
});

router.delete('/:id', (req, res) => {});

module.exports = router;