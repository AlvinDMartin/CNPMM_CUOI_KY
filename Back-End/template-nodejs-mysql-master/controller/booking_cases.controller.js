const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");
exports.addBookingCase = async (req, res) => {
    // Save User to Database
    let {
        customers_idCustomer,
        cases_doctors_idCase_doctor,
    } = req.body;
    try {
        let booking = await Booking_cases.create({
            customers_idCustomer,
            cases_doctors_idCase_doctor,
        })
        res.status(200).send(booking) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};
exports.updateBookingCase = async (req, res) => {
    let {
        idBooking,
        customers_idCustomer,
        cases_doctors_idCase_doctor,
    } = req.body;
    try {
        let booking = await Booking_cases.update({
            customers_idCustomer,
            cases_doctors_idCase_doctor,
        }, {
            where: {
                idBooking
            }
        })
        res.status(200).send(booking) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};
exports.getBookingCase = async (req, res) => {
    try {
        let booking = await Booking_cases.findAll({
            include: [
                {
                    model: Cases_doctors,
                    as: "detail_doctors_booking",
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
                },
                {
                    model: Customers,
                    as: "detail_doctors_customer"
                }
            ]
        });
        res.status(200).send(booking)
    } catch (error) {
        res.status(500).send(error)
    }
};