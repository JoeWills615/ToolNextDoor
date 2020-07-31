const router = require("express").Router();
const toolsController = require("../../controllers/toolsController");

// Matches with "/api/tools"
router.route("/")
  .get(toolsController.findAll)
  .post(toolsController.create);

// Matches with "/api/tools/:id"
router
  .route("/:id")
  .get(toolsController.findById);

module.exports = router;