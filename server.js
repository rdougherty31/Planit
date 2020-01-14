const express = require("express");
const routes = require("./routes/api/API.js");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const Sequelize = require("sequelize");
const router = express.Router();
const apiRoutes = require("./routes/api/API");
const cors = require("cors");
const cookieSession = require("cookie-session");


app.use(bodyParser.json());

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// use cookieSession for login feature
app.use(cookieSession({
  name: "session",
  keys: ["asdfkjjdsf1434"],
  httpOnly: false
}));

// Add routes, both API and view
app.use("/api/trips/", routes);
app.use("/test", routes);

// Requiring our models for syncing
const db = require("./models");

// Routes
require("./routes/api/API.js")(app);
// require("./routes/html/HTML.js")(app);

// use routes and cors
app.use("/api",apiRoutes);
app.use(cors());

// Sync sequelize models & Start the API server
var syncOptions = { force: false };

// if running a test set force to true & clear the travel DB
if (process.env.NODE_ENV === "test") {
 syncOptions.force = true;
}
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});