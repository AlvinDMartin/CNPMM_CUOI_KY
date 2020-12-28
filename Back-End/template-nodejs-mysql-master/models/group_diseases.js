const { Sequelize } = require("sequelize");
var Group_diseases = sequelize.define(
  "group_diseases",
  {
    idGroup: {
        type: Sequelize.BIGINT, 
        field: "idGroup",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nameGroup: {
      type: Sequelize.STRING(255),
      field: "nameGroup",
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
module.exports = Group_diseases;