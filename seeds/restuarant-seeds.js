const { Restaurants } = require('../models');

const restaurantsData = [
    {
        title: 'McDonalds',
    },
    {
        title: 'Burger King',
    },
    {
        title: 'Rancheritos',
    },
    {
        title: 'Wendys',
    },
    {
        title: 'Taco Bell',
    },
    {
        title: 'Taco Time',
    },
    {
        title: 'Panda Express',
    },
    {
        title: 'Arbys',
    },
    {
        title: 'Carls Jr',
    },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;