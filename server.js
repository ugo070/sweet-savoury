const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes");
const caterersRoutes = require("express").Router();
const app = express();

const PORT = process.env.PORT || 3001;

let Caterers = require("./models");

// // Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
require("./routes/api/api-routes")(app);
if (process.env.NODE_ENV === "production") {
  app.get("*", function(req, res) {
    res.json(__dirname + "/client/build/index.html");
  });
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Caterers");
mongoose.connect("mongodb://127.0.0.1:27017/caterers", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

caterersRoutes.route("/").get(function(req, res) {
  Caterers.find(function(err, caterers) {
    if (err) {
      console.log(err);
    } else {
      res.json(caterers);
    }
  });
});

caterersRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Caterers.findById(id, function(err, caterers) {
    res.json(caterers);
  });
});

caterersRoutes.route("/update/:id").post(function(req, res) {
  Caterers.findById(req.params.id, function(err, caterers) {
    if (!caterers) res.status(404).send("data is not found");
    else caterers.caterers_description = req.body.caterers_description;
    caterers.caterers_responsible = req.body.caterers_responsible;
    caterers.caterers_priority = req.body.caterers_priority;
    caterers.caterers_completed = req.caterers.caterers_completed;

    Caterers.save()
      .then(caterers => {
        res.json("Caterers updated!");
      })
      .catch(err => {
        res.status(400).send("Caterers not possible");
      });
  });
});

caterersRoutes.route("/add").post(function(req, res) {
  let caterers = new Caterers(req.body);

  caterers
    .save()
    .then(caterers => {
      res.status(200).json({ caterers: "caterers added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new caterers failed");
    });
});

app.use("/caterers", caterersRoutes);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
