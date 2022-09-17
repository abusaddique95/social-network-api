const { Router } = require("express");

const users = require("./api/users");
const thoughts = require("./api/thoughts");

const router = Router();

router.use("/users", users);
router.use("/thoughts", thoughts);

module.exports = router;
