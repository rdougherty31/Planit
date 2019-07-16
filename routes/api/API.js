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
    console.log(req.session);
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    })
      .catch(err => console.log(err));
  });
  app.get("/api/user/:username", function(req, res) {
    console.log("starting username fxn");
    console.log(req.session);
    db.User.findOne({where: {username: req.params.username}}).then(function (dbUser) {
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
  app.get("/testAPI", function (req, res) {
    // axios.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0/3d6afd89-8072-4d13-b3ac-bd39f1132703")
    // .then(result=>console.log(result)
    //   )
    //   .catch(err => console.log(err));

    axios({
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/LHR-sky/2019-09-01/2019-09-05`,
      method: 'GET',
      headers: {"X-RapidAPI-Key": "71a28091a0mshdaad41134865206p13df1ejsn100cb7e4ee56"}
    }).then(response=>{
      console.log(res)
      console.log(res.data);
      response.json(response);
    }).catch(err=>console.log(err));

    });

  // app.post("/api/users/", function (req, res) {
  //   console.log(req);
  //   db.Post.findOne({ id: req.body })
  //     .then(function (post) {
  //       console.log(post);
  //     })
  //     .catch(err => console.log(err));
  // });
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
