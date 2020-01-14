const db = require("../../models");
module.exports = function (app) {

  //GET routes
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    })
      .catch(err => console.log(err));
  });
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    })
      .catch(err => console.log(err));
  });
  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({where: {username: req.params.username}})
    .then(function (dbUser) {
      if (!dbUser) {
        res.send(404);
      } else {
      req.session.username = dbUser.username;
      req.session.id = dbUser.id;
      req.session.name = dbUser.name;
      res.json(dbUser);
      }
    })
    .catch(err => console.log(err));
  });
  app.get("/api/posts/:username", function(req, res) {
    db.Post.findAll({where: {creator: req.params.username}})
    .then(function (dbUser) {
      if (!dbUser) {
        res.send(404);
      } else {
      res.json(dbUser);
      }
    }).catch(err => console.log(err));
  }); 

// app.get("/api/associate", function(req, res) {
//     db.User.findAll({
//       include: [db.Post]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     }).catch(err=>console.log(err));
//   });

  // POST routes
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser)
    }).catch(err => console.log(err));
  });
  app.post("/api/posts", function (req, res) {
    db.Post.create(req.body)
      .then(function (dbPost) {
        res.json(dbPost)
      }).catch(err => console.log(err));
  });
  app.put("/api/posts", function(req, res) {
  db.Post.update({where: {id: req.body}}, {set: {creator: ""}})
  .then(function (dbPost) {
    res.json(dbPost)
  }).catch(err => console.log(err));
});
  // app.get("/api/posts/:tripId", function(req, res) {
  //   db.Post.update({where: {id: req.body}}, {set: {matchedUsers: req.body}})
  //   .then(function (dbPost) {
  //     res.json(dbPost)
  //   }).catch(err => console.log(err));
  // });
}
