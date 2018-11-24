const express = require("express");
// to use a router, express is required
const router = express.Router();

//@route GET api/posts/test
//@desc Tests post route
//@access Public
router.get("/test", (req, res) => res.json({ message: "Post works" }));
// this function is similar to app.get

module.exports = router;
