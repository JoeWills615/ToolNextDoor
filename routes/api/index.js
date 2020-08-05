const router = require("express").Router();
const toolRoutes = require("./tools");
const ownerRoutes = require("./owners");
const chargeRoutes = require('./charge')

router.use("/tools", toolRoutes);

router.use("/owners", ownerRoutes);

router.use("/charge", chargeRoutes);

module.exports = router;