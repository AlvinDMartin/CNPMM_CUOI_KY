const { Sequelize } = require("sequelize");
var Doctors = sequelize.define(
  "doctors",
  {
    idDoctor: {
        type: Sequelize.BIGINT, 
        field: "idDoctor",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING(255),
      field: "fullName",
      allowNull: true,
    },
    phone: {
        type: Sequelize.STRING(255),
        field: "phone",
        allowNull: true,
    },
    note: {
      type: Sequelize.STRING(255),
      field: "note",
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
module.exports = Doctors;