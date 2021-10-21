'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuestStar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GuestStar.belongsTo(models.Concert, {foreignKey: 'ConcertId'})
      GuestStar.hasMany(models.Song, {foreignKey: 'GuestStarId'})
      GuestStar.belongsTo(models.Category, {foreignKey: 'CategoryId'})
    }
  };
  GuestStar.init({
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
    modelName: 'GuestStar',
  });
  return GuestStar;
};