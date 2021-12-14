const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../options");


const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: options.dbPath,
});

class Thing extends Model {}

Thing.init(
  {
   name: {
      type: DataTypes.STRING,
    },
    dateS: {
      type: DataTypes.DATE,
    },
    dateF: {
      type: DataTypes.DATE,
    },
    priceS: {
      type: DataTypes.INTEGER,
    },
    priceF: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Thing",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Thing;