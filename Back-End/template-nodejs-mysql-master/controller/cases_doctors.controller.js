const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");

exports.addCaseDoctor = async (req, res) => {
    // Save User to Database
    let {
        dateRegister,
        status,
        cases_idCase,
        doctors_idDoctor,
    } = req.body;
    try {
        let case_doctor = await Cases_doctors.create({
            dateRegister,
            status,
            cases_idCase,
            doctors_idDoctor,
        })
        res.status(200).send(case_doctor) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }

};
exports.updateCaseDoctor = async (req, res) => {
    let {
        idCase_doctor,
        dateRegister,
        status,
        cases_idCase,
        doctors_idDoctor,
    } = req.body;
    try {
        let case_doctor = await Cases_doctors.update({
            dateRegister,
            status,
            cases_idCase,
            doctors_idDoctor,
        }, {
            where: {
                idCase_doctor
            }
        })
        res.status(200).send(case_doctor) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.getCaseDoctor = async (req, res) => {
    try {
        let case_doctor = await Cases_doctors.findAll({
            include: [
                {
                    model: Cases,
                    as: "detail_cases"
                },
                {
                    model: Doctors,
                    as: "detail_doctors"
                }
            ]
        });
        res.status(200).send(case_doctor)
    } catch (error) {
        res.status(500).send(error)
    }
};