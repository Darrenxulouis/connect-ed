const express = require("express");
// to use a router, express is required
const router = express.Router();

//@route GET api/profile/test
//@desc Tests profile route
//@access Public
router.get("/test", (req, res) => res.json({ message: "Profile works" }));
// this function is similar to app.get

module.exports = router;
