const db = require("../../models");

module.exports = function (app) {
  // GET routes
  app.get("/api/posts", function (req, res) {
    console.log("api post test");
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    });
  });
  app.get("/api/users", function (req, res) {
    console.log("api user test");
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // -------------------------------------------
  // POST routes
  // -------------------------------------------
  // app.post("/api/posts", function (req, res) {
  //   // db.Post.create(req.body).then(function (dbPost) {
  //   //   res.json(dbPost);
  //   // });
  //   console.log("api post test");
  // });
  // app.post("/api/users", function (req, res) {
  //   // db.User.create(req.body).then(function (dbUser) {
  //   //   res.json(dbUser);
  //   // });
  //   console.log("api user test");
  // });
}
