const router = require("express").Router();
const ownersController = require("../../controllers/ownersController");

// Matches with "/api/owners"
router.route("/")
  .get(ownersController.findAll)

// Matches with "/api/owners/:id"
router
  .route("/:id")
  .get(ownersController.findById)
  

module.exports = router;