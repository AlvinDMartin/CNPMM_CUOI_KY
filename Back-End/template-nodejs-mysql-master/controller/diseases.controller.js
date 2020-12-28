const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");


exports.addDiseases = async (req, res) => {
    // Save User to Database
    let {
        name,
        description,
        group_diseases_idGroup,
    } = req.body;
    try {
        let disease = await Diseases.create({
            name,
            description,
            group_diseases_idGroup,
        })
        res.status(200).send(disease) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }

};
exports.putDiseases = async (req, res)=>{
    let {
        idDisease,
        name,
        description,
        group_diseases_idGroup,
    } = req.body;
    try {
        let disease = await Diseases.update({
            name,
            description,
            group_diseases_idGroup,
        },{
            where: {
                idDisease
            }
        })
        res.status(200).send(disease) //tra ve data
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.getDiseases= async (req, res)=>{
    try {
        let diseases=await Diseases.findAll({
            include:{
                model:Group_diseases,
                as: "detail_group_diseases",
            }
        });
        res.status(200).send(diseases)
    } catch (error) {
        res.status(500).send(error)
    }
};