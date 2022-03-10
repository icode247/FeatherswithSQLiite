module.exports = function (options = {}) {
  return async (context) => {
    const sequelize = context.app.get('sequelizeClient');
    const { comments, users } = sequelize.models;
    context.params.sequelize = {
      include: [
        { model: users, attributes: ['email'] },
        { model: comments, limit: 10 },
      ],
      raw: false,
    };
    return context;
  };
};
