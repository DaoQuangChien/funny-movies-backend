const db = require("../models");
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      next();
    }
  );
};

checkEmptyFields = (req, res, next) => {
  let errMesseages = [];
  const isEmailEmpty = !req.body.email || !req.body.email.length;
  const isPasswordEmpty = !req.body.password || !req.body.password.length;

  if (isEmailEmpty) {
    errMesseages = [...errMesseages, "Failed! Email is required!"];
  }
  if (isPasswordEmpty) {
    errMesseages = [...errMesseages, "Failed! Password is required!"];
  }
  if (errMesseages.length) {
    res.status(400).send({ message: errMesseages.join("\n") });
    return;
  }
  next();
};

module.exports = {
  checkDuplicateEmail,
  checkEmptyFields,
};
