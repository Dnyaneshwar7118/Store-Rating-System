const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const owner = require("../controllers/ownerController");

router.get("/dashboard", auth, role("OWNER"), owner.dashboard);

module.exports = router;