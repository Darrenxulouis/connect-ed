const express = require("express");
// to use a router, express is required
const router = express.Router();

//@route GET api/users/test
//@desc Tests users route
//@access Public
router.get("/test", (req, res) => res.json({ message: "Users works" }));
// this function is similar to app.get

module.exports = router;
