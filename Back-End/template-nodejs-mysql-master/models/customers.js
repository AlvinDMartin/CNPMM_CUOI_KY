const { Sequelize } = require("sequelize");
var Customers = sequelize.define(
  "customers",
  {
    idCustomer: {
        type: Sequelize.BIGINT, 
        field: "idCustomer",
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
    address: {
        type: Sequelize.STRING(255),
        field: "address",
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
module.exports = Customers;