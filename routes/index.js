const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const searchRoutes = require("./search");
// REQUIRED
router.use("/api", apiRoutes);

router.use('/search', searchRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
  
module.exports = router;