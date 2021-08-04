const { Restaurants } = require('../models');

const restaurantsData = [
    {
        title: 'McDonalds',
        description: 'Nice cheap place to eat when low on funds',
    },
    {
        title: 'Burger King',
        description: 'Upgrade from Mcdonals',
    },
    {
        title: 'Rancheritos',
        description: 'Great place to get Carne Asada Fries',
    },
    {
        title: 'Wendys',
        description: 'A bit more bang for your buck type of place',
    },
    {
        title: 'Taco Bell',
        description: 'Try to go here when you have no where else to go',
    },
    {
        title: 'Taco Time',
        description: 'Upgraded Taco Bell',
    },
    {
        title: 'Panda Express',
        description: 'Great place for Orange chicken',
    },
    {
        title: 'Arbys',
        description: 'Roast beef up the wazoo',
    },
    {
        title: 'Carls Jr',
        description: 'Very expensive burger place',
    },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;