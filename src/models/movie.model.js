// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const movie = sequelizeClient.define(
    "movie",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      producer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.STRING,
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
  movie.associate = function (models) {
    const { rentals, movie } = models;
    movie.belongsToMany(rentals, { through: 'MovieRendtals' });
  };

  return movie;
};
