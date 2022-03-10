// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require("sequelize");
const { Movie } = require("../services/movie/movie.class");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const rentals = sequelizeClient.define(
    "rentals",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE, defaultValue: Date.now },
      updatedAt: { type: DataTypes.DATE, defaultValue: Date.now },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  rentals.associate = function (models) {
    const { users, movie } = models;
    rentals.belongsTo(users);
    rentals.belongsToMany(movie, { through: 'MovieRendtals' });
  };

  return rentals;
};
