"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.myTrack, { foreignKey: "userId" });
      user.belongsToMany(models.sample, {
        through: "Favorites",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
