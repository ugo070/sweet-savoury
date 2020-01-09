const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Caterers = new Schema({
  caterers_description: {
    type: String
  },
  caterers_responsible: {
    type: String
  },
  caterers_priority: {
    type: String
  },
  caterers_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Caterers", Caterers);
