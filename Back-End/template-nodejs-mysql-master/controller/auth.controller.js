const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var moment = require("moment");

exports.signup = async (req, res) => {
  // Save User to Database
  let {
    username,
    password,
    type,
  } = req.body;
  try {
    let account = await Accounts.create({
      username,
      password: bcrypt.hashSync(password, 8),
      type,
    })
    //console.log(moment("2021-01-03T13:47:55.454Z").format("YYYY-MM-DD HH:mm"))
    res.status(200).send(account) //tra ve data
  } catch (error) {
    res.status(500).send(error)
  }

};
exports.login = async (req, res) => {
  let { username, password } = req.body;
  try {
    let user = await Accounts.findOne({ //select 1
      attributes: [
        "username",
        "password",
        "type",
      ],
      where: {
        username: username,
      },
    })
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    var token = jwt.sign({ id: user.username }, config.secret, {
      expiresIn: "30d", // 24 hours
    });
    res.status(200).send({
      user: user,
      token: token,
    });
  } catch (error) {
    res.status(500).send(error)
  }

};