const { Sequelize } = require("sequelize");
var Specialists = sequelize.define(
  "specialists",
  {
    idSpecialists: {
        type: Sequelize.BIGINT, 
        field: "idSpecialists",
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
module.exports = Specialists;