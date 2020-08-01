const router = require("express").Router();
const toolsController = require("../controllers/toolsController");

// Matches with "/search/:id"
router.route("/:id")
  .get(toolsController.findByName)


module.exports = router;