const router = require("express").Router();
const toolRoutes = require("./tools");
const ownerRoutes = require("./owners");

router.use("/tools", toolRoutes);

router.use("/owners", ownerRoutes);

module.exports = router;