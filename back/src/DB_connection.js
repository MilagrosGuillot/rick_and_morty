require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DATABASE_URL } = process.env; // Solo necesitas la URL completa

const FavoriteModel = require("./controllers/models/Favorite");
const UserModel = require("./controllers/models/User");

const sequelize = new Sequelize(
  DATABASE_URL,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
      }
    }
  }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "userfavorite" });
Favorite.belongsToMany(User, { through: "userfavorite" });

module.exports = {
  conn: sequelize,
  ...sequelize.models
};
