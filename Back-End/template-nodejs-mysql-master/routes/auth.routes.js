const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controller/auth.controller");
const diseases = require("../controller/diseases.controller");
const specialists = require("../controller/specialists.controller");
const booking_cases = require("../controller/booking_cases.controller");
const doctors = require("../controller/doctors.controller");
const group_diseases = require("../controller/group_diseases.controller");
const cases = require("../controller/cases.controller");
const cases_doctors = require("../controller/cases_doctors.controller");
const customers = require("../controller/customers.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
    );
    next();
  });
  //API Accounts
  app.post(
    "/api/auth/signup",
    controller.signup,
  );
  app.post(
    "/api/auth/login",
    controller.login,
  );
  //API Diseases
  app.post(
    "/api/auth/diseases",
    diseases.addDiseases,
  );
  app.put(
    "/api/auth/diseases",
    diseases.putDiseases,
  );
  app.get(
    "/api/auth/list-diseases",
    diseases.getDiseases,
  );
  //API Group Diseases
  app.get(
    "/api/auth/group-diseases",
    group_diseases.getGroupDiseases,
  );
  app.put("/api/auth/group-diseases",
    group_diseases.updateGroupDiseases,
  );
  app.post("/api/auth/group-diseases",
    group_diseases.addGroupDiseases,
  );
  //API Specialists
  app.post(
    "/api/auth/get-specialists",
    specialists.addSpecialists,
  );
  app.get("/api/auth/get-specialists",
    specialists.getSpecialists,
  );
  app.put("/api/auth/get-specialists",
    specialists.updateSpecialists,
  );
  //API Customer
  app.get("/api/auth/customers",
    customers.getCustomer,
  );
  app.put("/api/auth/customers",
    customers.updateCustomer,
  );
  app.post("/api/auth/add-customers",
    customers.addCustomer,
  );
  //API Doctors
  app.get("/api/auth/doctors",
    doctors.getDoctor,
  );
  app.put("/api/auth/doctors",
    doctors.updateDoctor,
  );
  app.post("/api/auth/doctors",
    doctors.addDoctor,
  );
  //API Cases
  app.get("/api/auth/cases",
    cases.getCases,
  );
  app.put("/api/auth/cases",
    cases.updateCases,
  );
  app.post("/api/auth/cases",
    cases.addCases,
  );
  //API Booking Case

  //API Cases Doctors
};