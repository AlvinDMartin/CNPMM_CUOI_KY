global.Sequelize = require("sequelize");
global.sequelize = new Sequelize("nna", "root", "nguyenanh", {
  host: "127.0.0.1",
  //logging: false,
  dialect: "mysql",
  pool: {
    max: 50,
    min: 0,
    idle: 10000,
  },
});

global.Accounts = require("./accounts");
global.Booking_cases = require("./booking_cases");
global.Cases_doctors = require("./cases_doctors");
global.Cases = require("./cases");
global.Customers = require("./customers");
global.Diseases = require("./diseases");
global.Doctors = require("./doctors");
global.Group_diseases = require("./group_diseases");
global.Specialists = require("./specialists");
//join table ----1:n
Cases.hasMany(Cases_doctors, {
  sourceKey: "idCase",
  foreignKey: "cases_idCase",
  as: "list_cases",
});
Cases_doctors.belongsTo(Cases, {
  targetKey: "idCase",
  foreignKey: "cases_idCase",
  as: "detail_cases",
});
Doctors.hasMany(Cases_doctors, {
  sourceKey: "idDoctor",
  foreignKey: "doctors_idDoctor",
  as: "list_doctors",
});
Cases_doctors.belongsTo(Doctors, {
  targetKey: "idDoctor",
  foreignKey: "doctors_idDoctor",
  as: "detail_doctors",
});

Cases_doctors.hasMany(Booking_cases, {
  sourceKey: "idCase_doctor",
  foreignKey: "cases_doctors_idCase_doctor",
  as: "list_doctors_booking",
});
Booking_cases.belongsTo(Cases_doctors, {
  targetKey: "idCase_doctor",
  foreignKey: "cases_doctors_idCase_doctor",
  as: "detail_doctors_booking",
});
Customers.hasMany(Booking_cases, {
  sourceKey: "idCustomer",
  foreignKey: "customers_idCustomer",
  as: "list_doctors_customer",
});
Booking_cases.belongsTo(Customers, {
  targetKey: "idCustomer",
  foreignKey: "customers_idCustomer",
  as: "detail_doctors_customer",
});


Specialists.hasMany(Doctors, {
  sourceKey: "idSpecialists",
  foreignKey: "specialists_idSpecialists",
  as: "list_specialist",
});
Doctors.belongsTo(Specialists, {
  targetKey: "idSpecialists",
  foreignKey: "specialists_idSpecialists",
  as: "detail_specialist",
});


Group_diseases.hasMany(Diseases, {
  sourceKey: "idGroup",
  foreignKey: "group_diseases_idGroup",
  as: "list_group_diseases",
});
Diseases.belongsTo(Group_diseases, {
  targetKey: "idGroup",
  foreignKey: "group_diseases_idGroup",
  as: "detail_group_diseases",
});

Specialists.hasMany(Group_diseases, {
  sourceKey: "idSpecialists",
  foreignKey: "specialists_idSpecialists",
  as: "list_group_specialist",
});
Group_diseases.belongsTo(Specialists, {
  targetKey: "idSpecialists",
  foreignKey: "specialists_idSpecialists",
  as: "detail_group_specialist",
});

Accounts.hasOne(Customers, {
  sourceKey: "username",
  foreignKey: "accounts_username",
  as: "list_account",
});