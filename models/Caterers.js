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

// var mongoose = require("mongoose");

// var Schema = mongoose.Schema;

// var FeedSchema = new Schema({
//   feed: {
//     type: String,
//     required: true
//   },
//   food_id: {
//     type: Schema.Types.ObjectId,
//     ref: "Food"
//   }
// });

// var Feed = mongoose.model("Feed", FeedSchema);

// module.exports = Feed;
