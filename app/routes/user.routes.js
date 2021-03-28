const db = require("../models");
const User = db.user;

module.exports = function (app) {
  app.use(function (_, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/users", (_, res) => {
    User.find({}, (err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.status(200).send({ data });
    });
  });
};
