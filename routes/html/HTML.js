const db = require("../../models");

module.exports = function(app) {
  // app.get("/html/test", function(req, res) {
  //   console.log("html test");
  //   res.send("html test");
  // });
  app.get("/html/dbtest", function(req, res) {
    db.test123.findAll({}).then(response => res.json(response)).catch(err=>console.log(err));
  });
};