'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Concert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Concert.hasMany(models.Event, {foreignKey: 'ConcertId'})
      Concert.hasMany(models.Band, {foreignKey: 'ConcertId'})
      Concert.belongsTo(models.Soloist, {foreignKey: 'ConcertId'})
    }
  };
  Concert.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Concert',
  });
  return Concert;
};