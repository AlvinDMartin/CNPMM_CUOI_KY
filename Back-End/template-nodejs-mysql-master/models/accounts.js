const { Sequelize } = require("sequelize");
var Accounts = sequelize.define(
  "accounts",
  {
    username: {
        type: Sequelize.STRING(255), 
        field: "username",
        primaryKey: true,
        allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      field: "password",
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING(255),
      field: "type",
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      field: "createdAt",
      allowNull: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: "updatedAt",
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    indexes: [],
  },
);
module.exports = Accounts;