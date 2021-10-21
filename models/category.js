'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.hasMany(models.Band, {foreignKey: 'CategoryId'})
      Category.hasMany(models.Soloist, {foreignKey: 'CategoryId'})
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        }
      }
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg: 'Image URL is required'
        },
        isUrl: {
          msg: 'photo must URL type'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};