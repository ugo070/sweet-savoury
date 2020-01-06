const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  flavor: { type: String, required: true },
  diary: { type: String, required: true },
  color: String
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
