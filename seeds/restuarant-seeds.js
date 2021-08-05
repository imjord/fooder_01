const { Restaurants } = require('../models');

const restaurantsData = [
    {
        title: 'McDonalds',
        description: "McDonald's is a fast food, limited service restaurant with more than 35,000 restaurants in over 100 countries.",
    },
    {
        title: 'Burger King',
        description: "Burger King Corporation, restaurant company specializing in flame-broiled fast-food hamburgers.",
    },
    {
        title: 'Rancheritos',
        description: "Fast-food chain offering familiar Mexican fare, including breakfast options, around the clock.",
    },
    {
        title: 'Wendys',
        description: "The chain is known for its square hamburgers, sea salt fries, and Frosty, a form of soft-serve ice cream mixed with starches.",
    },
    {
        title: 'Taco Bell',
        description: "Taco Bell, fast-food restaurant chain headquartered in Irvine, California, U.S., that offers Mexican-inspired foods.",
    },
    {
        title: 'Taco Time',
        description: "TacoTime® is an upscale quick-service restaurant chain offering a tasty variety of freshly-prepared, home style, Mexican fare.",
    },
    {
        title: 'Panda Express',
        description: "Panda Express is an American fast food restaurant chain that serves American Chinese cuisine.",
    },
    {
        title: 'Arbys',
        description: "A subsidiary of Triarc Companies, Inc., Arby's Inc. is a leading global fast-food restaurant chain with more than 2,800 restaurants worldwide.",
    },
    {
        title: 'Carls Jr',
        description: "Founded in 1941, Carl's Jr. has been a West Coast favorite for almost 80 years, known for our iconic charbroiled burgers.",
    },
];

const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = seedRestaurants;