const db = require("../../models");
const axios = require("axios");
const session = require("express-session");
const user = "";
module.exports = function (app) {

  // GET routes
  //   app.get("/profile", function(req, res) {
  //   if (!req.session.user) {
  //     return res.status(401).send("Not signed in.");
  //   }
  //   return res.status(200).send("Signed in.");
  // });
  // app.post("/login", function(req, res) {
  //   const username = req.body.username;
  //   const password = req.body.username;
  //   User.findOne({username: username, pword: password}, function(error, user) {
  //     if (error) {
  //       console.log(error);
  //       return res.status(500).send();
  //     }
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     req.session.user = user;
  //     return res.status(200).send();
  //   });
  // });
  app.get("/api/posts", function (req, res) {
    console.log("api post test");
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    })
      .catch(err => console.log(err));
  });
  app.get("/api/users", function (req, res) {
    console.log("api user test");
    // req.session.user = user;
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    })
      .catch(err => console.log(err));
  });
  app.get("/testAPI", function (req, res) {
    axios.get("https://api.giphy.com/v1/gifs/search?q=kittens&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20")
      .then(response => {
        console.log(response.data.data)
        res.send(response.data.data)
      })
      .catch(err => console.log(err));
  });
  app.post("/api/users/", function (req, res) {
    console.log(req);
    db.Post.findOne({ id: req.body })
      .then(function (post) {
        console.log(post);
      })
      .catch(err => console.log(err));
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



//---------------------------------------------------------------

// const router = require("express").Router();
// const postController = require("../../controllers/postController");

//   // GET routes
//   router.route("/testcontroller")
//   .get(postController.findAll)
//   .post(postController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(postController.findById)
//   .put(postController.update)
//   .delete(postController.remove);

// module.exports = router;
