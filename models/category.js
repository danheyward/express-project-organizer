'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    models.category.belongsToMany(models.project, { through: models.categories_projects });
  };
  return category;
};
