// const { Restaurants } = require('../models');

const restaurantsData = [
    {
        title: 'McDonalds',
        description: "McDonald's is a fast food, limited service restaurant with more than 35,000 restaurants in over 100 countries.",
        image: "/assets/images/mcdonalds-2.jpg"
    },
    {
        title: 'Burger King',
        description: "Burger King Corporation, restaurant company specializing in flame-broiled fast-food hamburgers.",
        image: "/assets/images/burger-king.jpg"
    },
    {
        title: 'Rancheritos',
        description: "Fast-food chain offering familiar Mexican fare, including breakfast options, around the clock.",
        image: "/assets/images/rancherito-restaurant.jpg"
    },
    {
        title: 'Wendys',
        description: "The chain is known for its square hamburgers, sea salt fries, and Frosty, a form of soft-serve ice cream mixed with starches.",
        image: "/assets/images/Wendy-social.png"
    },
    {
        title: 'Taco Bell',
        description: "Taco Bell, fast-food restaurant chain headquartered in Irvine, California, U.S., that offers Mexican-inspired foods.",
        image: "/assets/images/taco-bell.jpg"
    },
    {
        title: 'Taco Time',
        description: "TacoTime® is an upscale quick-service restaurant chain offering a tasty variety of freshly-prepared, home style, Mexican fare.",
        image: "/assets/images/taco-time.jpg"
    },
    {
        title: 'Panda Express',
        description: "Panda Express is an American fast food restaurant chain that serves American Chinese cuisine.",
        image: "/assets/images/panda.jpg"
    },
    {
        title: 'Arbys',
        description: "A subsidiary of Triarc Companies, Inc., Arby's Inc. is a leading global fast-food restaurant chain with more than 2,800 restaurants worldwide.",
        image: "/assets/images/Arby.jpg"
    },
    {
        title: 'Carls Jr',
        description: "Founded in 1941, Carl's Jr. has been a West Coast favorite for almost 80 years, known for our iconic charbroiled burgers.",
        image: "/assets/images/carls.jpg"
    },
];

// const seedRestaurants = () => Restaurants.bulkCreate(restaurantsData);

module.exports = restaurantsData;