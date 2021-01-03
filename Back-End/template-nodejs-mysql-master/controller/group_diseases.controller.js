const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");

exports.getGroupDiseases = async (req, res) => {
    try {
        let groupdiseases = await Group_diseases.findAll();
        res.status(200).send(groupdiseases)
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.addGroupDiseases = async (req, res) => {
    // Save User to Database
    let {
            nameGroup,
            description,
            specialists_idSpecialists,
    } = req.body;
    try {
        let groupdiseases = await Group_diseases.create({
            nameGroup,
            description,
            specialists_idSpecialists,
        })
        res.status(200).send(groupdiseases) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }

};

exports.updateGroupDiseases = async (req, res) => {
    let {
        idGroup,
        nameGroup,
        description,
        specialists_idSpecialists,
    } = req.body;
    try {
        let groupdiseases = await Group_diseases.update({
            nameGroup,
            description,
            specialists_idSpecialists,
        }, {
            where: {
                idGroup
            }
        })
        res.status(200).send(groupdiseases) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};