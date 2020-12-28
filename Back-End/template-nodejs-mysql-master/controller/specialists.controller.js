const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");


exports.addSpecialists = async (req, res) => {
    // Save User to Database
    let {
        name,
        description,
    } = req.body;
    try {
        let specialist = await Specialists.create({
            name,
            description,
        })
        res.status(200).send(specialist) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.getSpecialists = async (req, res) => {
    try {
        let specialist = await Specialists.findAll({

        });
        res.status(200).send(specialist)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateSpecialists = async (req, res) => {
    let {
        idSpecialists,
        name,
        description,
    } = req.body;
    try {
        let specialist = await Specialists.update({
            name,
            description,
        }, {
            where: {
                idSpecialists
            }
        })
        res.status(200).send(specialist) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};