const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const corsOptions = {
  origin: [
    "https://funny-movies-frontend-chien.herokuapp.com",
    "http://localhost:3000",
  ],
};
const PORT = process.env.PORT || 8080;

db.mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.yd2r9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/movie.routes")(app);
app.get("/", (_, res) => {
  res.json({ message: "Welcome to funny movies application." });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
