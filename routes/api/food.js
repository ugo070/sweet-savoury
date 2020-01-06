const router = require("express").Router();
const booksController = require("../../controllers/foodc");

// Matches with "/api/books"
router
  .route("/")
  .get(foodc.findAll)
  .post(foodc.create);

// Matches with "/api/books/:id"

module.exports = router;
