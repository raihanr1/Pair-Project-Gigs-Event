'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    get formatDate() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return this.dateOfBirth.toLocaleDateString('id-ID', options);
    }

    static associate(models) {
      Profile.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Profile.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'First Name is required!'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Last Name is required!'
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: 'Date of birth is required!'
        }
      }
    },
    favoriteGenre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Favorite Genre is required!'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};