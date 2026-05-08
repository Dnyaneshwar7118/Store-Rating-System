const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const user = require("../controllers/userController");

router.get("/stores", auth, user.getStores);
router.post("/rating", auth, user.submitRating);

module.exports = router;