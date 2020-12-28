const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");

exports.addDoctor = async (req, res) => {
    // Save User to Database
    let {
        fullName,
        phone,
        note,
        specialists_idSpecialists,
    } = req.body;
    try {
        let doctor = await Doctors.create({
            fullName,
            phone,
            note,
            specialists_idSpecialists,
        })
        res.status(200).send(doctor) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }

};
exports.updateDoctor = async (req, res) => {
    let {
        idDoctor,
        fullName,
        phone,
        note,
        specialists_idSpecialists,
    } = req.body;
    try {
        let doctor = await Doctors.update({
            fullName,
            phone,
            note,
            specialists_idSpecialists,
        }, {
            where: {
                idDoctor
            }
        })
        res.status(200).send(doctor) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.getDoctor = async (req, res) => {
    try {
        let doctor = await Doctors.findAll({
            include: {
                model: Specialists,
                as: "detail_specialist",
            }
        });
        res.status(200).send(doctor)
    } catch (error) {
        res.status(500).send(error)
    }
};