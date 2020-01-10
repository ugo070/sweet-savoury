const router = require("express").Router();
const caterersRoutes = require("express").Router();
// const caterersRoutes = express.Router();
router.use("/caterers", caterersRoutes);

module.exports = router;
