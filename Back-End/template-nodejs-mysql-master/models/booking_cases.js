const { Sequelize } = require("sequelize");
var Booking_cases = sequelize.define(
  "booking_cases",
  {
    idBooking: {
        type: Sequelize.BIGINT, 
        field: "idBooking",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
module.exports = Booking_cases;