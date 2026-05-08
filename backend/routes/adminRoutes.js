const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const admin = require("../controllers/adminController");

router.get("/dashboard", auth, role("ADMIN"), admin.dashboard);
router.post("/store", auth, role("ADMIN"), admin.addStore);
router.post("/user", auth, role("ADMIN"), admin.addUser);
router.get("/users", auth, role("ADMIN"), admin.getUsers);
router.get("/stores", auth, role("ADMIN"), admin.getStores);

module.exports = router;