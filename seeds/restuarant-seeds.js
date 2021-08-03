const { Restaurants } = require('../models');

const restaurantsData = [
    {
        title: 'McDonalds',
        description: '',
    },
    {
        title: 'Burger King',
        description: '',
    },
    {
        title: 'Rancheritos',
        description: '',
    },
    {
        title: 'Wendys',
        description: '',
    },
    {
        title: 'Taco Bell',
        description: '',
    },
    {
        title: 'Taco Time',
        description: '',
    },
    {
        title: 'Panda Express',
        description: '',
    },
    {
        title: 'Arbys',
        description: '',
    },
    {
        title: 'Carls Jr',
        description: '',
    },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;