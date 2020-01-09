const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const caterersRoutes = express.Router();
const PORT = 4000;

let Caterers = require("./caterers.model");

app.use(cors());
app.use(bodyParser.json());

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

caterersRoutes.route("/update/:id").post(function(req, res) {
  Caterers.findById(req.params.id, function(err, caterers) {
    if (!caterers) res.status(404).send("data is not found");
    else caterers.caterers_description = req.body.caterers_description;
    caterers.caterers_responsible = req.body.caterers_responsible;
    caterers.caterers_priority = req.body.caterers_priority;
    caterers.caterers_completed = req.body.caterers_completed;

    caterers
      .save()
      .then(caterers => {
        res.json("Caterers updated");
      })
      .catch(err => {
        res.status(400).send("update not possible");
      });
  });
});

app.use("/caterers", caterersRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
