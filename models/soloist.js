'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soloist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Soloist.belongsTo(models.Concert, {foreignKey: 'ConcertId'})
      Soloist.hasMany(models.SoloistSong, {foreignKey: 'SoloistId'})
      Soloist.belongsTo(models.Category, {foreignKey: 'CategoryId'})
    }
  };
  Soloist.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'Name is required'
        }
      }
    },
    debutYear: {
      type: DataTypes.DATE,
      validate: {
        notEmpty:{
          msg: 'Debut Year is required'
        }
      }
    },
    ConcertId: DataTypes.INTEGER 
    ,
    CategoryId: DataTypes.INTEGER,
    imageURL: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Image URL is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Soloist',
  });
  return Soloist;
};