const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");
//const Customers = require("../models/customers");

exports.addCustomer = async (req, res) => {
    // Save User to Database
    let {
        fullName,
        phone,
        address,
        note,
    } = req.body;
    try {
        let customer = await Customers.create({
            fullName,
            phone,
            address,
            note,
        })
        res.status(200).send(customer) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }

};

exports.updateCustomer = async (req, res) => {
    let {
        idCustomer,
        fullName,
        phone,
        address,
        note,
    } = req.body;
    try {
        let customer = await Customers.update({
            fullName,
            phone,
            address,
            note,
        }, {
            where: {
                idCustomer
            }
        })
        res.status(200).send(customer) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.getCustomer = async (req, res) => {
    try {
        let customer = await Customers.findAll({
            
        });
        res.status(200).send(customer)
    } catch (error) {
        res.status(500).send(error)
    }
};