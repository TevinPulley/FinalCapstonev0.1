// var password = "SamuS#22";

require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local");
const app = express();

var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: "null" }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
// 'secret' should be random garbage.
app.use(
  session({
    secret: "vi43jarbjk5bg512a4goq5wpcv",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

var User = require("./userSchema");

var Item = require("./itemSchema");

// passport congiguration
passport.use(
  new passportLocal.Strategy(
    {
      usernameField: "email", // Configurations
      passwordField: "plainPassword",
    },
    function (email, plainPassword, done) {
      // authentication logic: Sucess or failure?
      User.findOne({ email: email })
        .then(function (user) {
          if (!user) {
            // if user doesnt exist: failure
            return done(null, false);
          } else {
            user.verifyPassword(plainPassword, function (result) {
              if (result) {
                return done(null, user); // return sucess if password matches
              } else {
                return done(null, false); // return a failure if password doesnt match
              } // done function is...
            });
          }
        })
        .catch(function (err) {
          done(err);
        });
    }
  )
);
// End passport configuration

// PASSPORT SERIALIZATION & DESERIALIZATION
passport.serializeUser(function (user, done) {
  done(null, user._id); // called when the user SUCESSUFLLY authenticated
  // write down who user is & save the user ID into the session
});

passport.deserializeUser(function (userId, done) {
  // WHEN?! this is calleed before any request from a user after successful authentication
  // read the user id from the session and load user form database???
  User.findOne({ _id: userId })
    .then(function (user) {
      done(null, user);
    })
    .catch(function (err) {
      done(err);
    });
});

// RESTful authentication action/route
// if you use '/session' its using session because its a singleton resource, not a collection.
app.post("/session", passport.authenticate("local"), function (req, res) {
  // if authentication worked this code runs, else it sends automatic 401;
  res.sendStatus(201);
});

app.get("/session", function (req, res) {
  // request to see if logged in
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
});

app.delete("/session", function (req, res) {
  // req.logout();

  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});

// To create new user

app.post("/users", function (req, res) {
  User.findOne({ email: req.body.email }).then(function (user) {
    if (user) {
      //return res.status(422).send({error: "Email already in use"});
      //return res.status(422);
      message = "Email already in use";
      return res.status(422).json(message);
    }
  });

  let user = new User({
    email: req.body.email, // saving the hashed password into the encryptedPassword field
    encryptedPassword: req.body.plainPassword,
    name: req.body.name,
  });

  user.setEncryptedPassword(req.body.plainPassword, function () {
    // insert into model
    user
      .save()
      .then(function () {
        res.sendStatus(201);
      })
      .catch(function (err) {
        if (err.errors) {
          console.log("there was a problem: ", err.errors);
          var messages = {};
          for (let e in err.errors) {
            messages[e] = err.errors[e].message;
          }
          //res.sendStatus(422);
          res.status(422).json(messages);
        } else {
          res.sendStatus(500);
        }
      });
  });
});

// maybe use for getting a shopping cart

// app.get('/me', function (req, res) {
//   User.findOne({_id: req.user}).populate('posts').then(function(user){
//       res.json(user);
//   })
// });

// Maybe change for deleting items out of carts

// app.delete("/items/:item_name", function (req, res) {
//   let item_name = req.params.item_name;
//   Item.findByNameAndDelete({ _id: item_name }).then(function (item) {
//     res.json(item);
//   });
// });

// Start of Item endpoints

app.post("/item", function (req, res) {
  console.log("getting item");
  let item = new Item({
    image: req.body.image,
    name: req.body.name,
    size: req.body.size,
    specs: req.body.specs,
    description: req.body.description,
    price: req.body.price,
  });
  item
    .save()
    .then(function () {
      res.sendStatus(201); // 201 = created
    })
    .catch(function (err) {
      if (err.errors) {
        console.log("there was a problem: ", err.errors);
        var messages = {};
        for (let e in err.errors) {
          messages[e] = err.errors[e].message;
        }
        res.sendStatus(422);
      } else {
        res.sendStatus(500);
      }
    });
});

app.get("/items", function (req, res) {
  Item.find({}).then(function (item) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(item);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public"));
});

// const { getJobs, createJob, deleteItem } = require("./controller");

// app.get(`/api/jobs`, getJobs);
// app.post(`/api/jobs`, createJob);
// app.delete(`/api/items/:id`, deleteItem);
// app.put(`/api/houses/:id`, updateHouse);

mongoose
  .connect(process.env.MONGOOSE_API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    app.listen(port, function () {
      console.log(`app Listening on port: ${port}`);
    });
  });
