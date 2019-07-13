const db = require("../../models");
const axios = require("axios");

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
  app.get("/testAPI", function (req, res) {
    axios.get("https://api.giphy.com/v1/gifs/search?q=kittens&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20")
      .then(response => {
        console.log(response.data.data)
        res.send(response.data.data)
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
      res.json(dbUser);
    });
    //   console.log("api user test");
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
