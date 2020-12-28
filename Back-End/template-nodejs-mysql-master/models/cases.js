const { Sequelize } = require("sequelize");
var Cases = sequelize.define(
  "cases",
  {
    idCase: {
        type: Sequelize.BIGINT, 
        field: "idCase",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nameCase: {
      type: Sequelize.STRING(255),
      field: "nameCase",
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
module.exports = Cases;