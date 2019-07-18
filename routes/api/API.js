const db = require("../../models");
module.exports = function (app) {

  //GET routes
  app.get("/api/posts", function (req, res) {
    console.log("api post test");
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    })
      .catch(err => console.log(err));
  });
  app.get("/api/users", function (req, res) {
    console.log("api user test");
    console.log(req.session);
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    })
      .catch(err => console.log(err));
  });
  app.get("/api/user/:username", function(req, res) {
    console.log("starting username fxn");
    console.log(req.session);
    db.User.findOne({where: {username: req.params.username}})
    .then(function (dbUser) {
      console.log(dbUser);
      if (!dbUser) {
        res.send(404);
      } else {
      req.session.username = dbUser.username;
      req.session.id = dbUser.id;
      req.session.name = dbUser.name;
      console.log(req.session);
      res.json(dbUser);
      }
    })
    .catch(err => console.log(err));
  }); 
  app.get("/api/posts/:username", function(req, res) {
    console.log("starting mytrips post fxn");
    console.log(req.session);
    db.Post.findAll({where: {creator: req.params.username}})
    .then(function (dbUser) {
      console.log(dbUser);
      if (!dbUser) {
        res.send(404);
      } else {
      res.json(dbUser);
      }
    })
    .catch(err => console.log(err));
  }); 

app.get("/api/associate", function(req, res) {
    db.User.findAll({
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST routes
  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser)
        .catch(err => console.log(err));
    });
    //   console.log("api user test");
  });
  app.post("/api/posts", function (req, res) {
    console.log(req.body);
    db.Post.create(req.body)
      .then(function (dbPost) {
        res.json(dbPost)
      })
      .catch(err => console.log(err));
  });
}