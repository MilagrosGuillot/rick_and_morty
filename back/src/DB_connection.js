require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL } = process.env;
const FavoriteModel = require("./controllers/models/Favorite");
const UserModel = require("./controllers/models/User");
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`),
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
   //? aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
   //!No
   //TODO: DAKSDAGFGFDHFHG

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;
const {User, Favorite} = sequelize.models
User.belongsToMany(Favorite, {through:"userfavorite"})
Favorite.belongsToMany(User, {through:"userfavorite"})

module.exports = {
   // User,
   // Favorite,
   conn: sequelize,
   ...sequelize.models
};
