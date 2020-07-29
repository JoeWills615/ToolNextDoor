const router = require("express").Router();
const ownersController = require("../../controllers/ownersController");

// Matches with "/api/owners"
router.route("/")
  .get(ownersController.findAll)
  .post(ownersController.create);

// Matches with "/api/owners/:id"
router
  .route("/:id")
  .get(ownersController.findById)
  .put(ownersController.update)
  .delete(ownersController.remove);

module.exports = router;