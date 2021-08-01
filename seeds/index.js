const sequelize = require ('../config/connection');

const restaurantsSeeds = require('./restuarant-seeds');

const seedsAll = async () => {
    await sequelize.sync({ force: true });
    await restaurantsSeeds();

    process.exit(0);
};

seedsAll();