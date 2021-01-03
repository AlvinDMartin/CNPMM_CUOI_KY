const { Sequelize } = require("sequelize");
var Cases_doctors = sequelize.define(
  "cases_doctors",
  {
    idCase_doctor: {
        type: Sequelize.BIGINT, 
        field: "idCase_doctor",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    dateRegister: {
        type: Sequelize.DATE,
        //defaultValue: Sequelize.NOW,
        //time_zone: 'Asia/Ho_Chi_Minh',
        field: "dateRegister",
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING(255),
        field: "status",
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
module.exports = Cases_doctors;