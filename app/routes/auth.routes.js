const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (_, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [verifySignUp.checkEmptyFields, verifySignUp.checkDuplicateEmail],
    controller.signup
  );
  app.post(
    "/api/auth/signin",
    [verifySignUp.checkEmptyFields],
    controller.signin
  );
};
