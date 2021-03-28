const { authJwt } = require("../middlewares");
const controller = require("../controllers/movie.controller");

module.exports = function (app) {
  app.use(function (_, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/movies", controller.getListMovies);
  app.post("/api/movie", [authJwt.verifyToken], controller.postMovie);
  app.post("/api/movie/upvote", [authJwt.verifyToken], controller.upVoteMovie);
  app.post(
    "/api/movie/downvote",
    [authJwt.verifyToken],
    controller.downVoteMovie
  );
};
