const express = require("express");
const routes = require("./routes/api/API.js");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const Sequelize = require("sequelize");
const router = express.Router();
const apiRoutes = require("./routes/api/API");
const cors = require("cors");


app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api/trips/", routes);
app.use("/test", routes);
// app.use("/api/posts",routes);
// app.use("/api/users",routes);

// Requiring our models for syncing
const db = require("./models");

//test route
app.get("/test", (req, res) => {
  res.send("test");
  console.log("test");
});
// Routes
// =============================================================
require("./routes/api/API.js")(app);
require("./routes/html/HTML.js")(app);

app.use("/api",apiRoutes);

app.use(cors());

// Sync sequelize models & Start the API server
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
 syncOptions.force = true;
}
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});


// const axios = require("axios");
// const router = require("express").Router();

// router.get("/flights/", (req, res) => {
//     axios
//       .get("https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy", { params: req.query })
//       .then(({ data: { results } }) => res.json(results))
//       .catch(err => res.status(422).json(err));
//   });