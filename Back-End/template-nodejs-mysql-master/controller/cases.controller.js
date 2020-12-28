const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");

exports.addCases = async (req, res) => {
    // Save User to Database
    let {
        nameCase,
    } = req.body;
    try {
        let cases = await Cases.create({
            nameCase,
        })
        res.status(200).send(cases) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }

};

exports.updateCases = async (req, res) => {
    let {
        idCase,
        nameCase,
    } = req.body;
    try {
        let cases = await Cases.update({
            nameCase,
        }, {
            where: {
                idCase
            }
        })
        res.status(200).send(cases) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.getCases = async (req, res) => {
    try {
        let cases = await Cases.findAll({

        });
        res.status(200).send(cases)
    } catch (error) {
        res.status(500).send(error)
    }
};