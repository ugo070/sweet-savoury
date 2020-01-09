var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  priority: {
    type: String
  },
  url: {
    type: String
  },
  photo_url: {
    type: String
  },
  saved: {
    type: Boolean,
    default: false
  }
});

var Food = mongoose.model("Food", FoodSchema);

module.exports = Food;

// module.exports = Food;

// const foodSchema = new Schema({
//   flavor: { type: String, required: true },
//   diary: { type: String, required: true },
//   color: String
// });

// const Food = mongoose.model("Food", foodSchema);
