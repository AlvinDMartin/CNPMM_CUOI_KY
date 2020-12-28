const { Sequelize } = require("sequelize");
var Diseases = sequelize.define(
  "diseases",
  {
    idDisease: {
        type: Sequelize.BIGINT, 
        field: "idDisease",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
      type: Sequelize.STRING(255),
      field: "name",
      allowNull: true,
    },
    description: {
        type: Sequelize.STRING(255),
        field: "description",
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
module.exports = Diseases;