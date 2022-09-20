const { Router } = require("express");
const router = Router();

const friendsRoutes = require("./friends");
const thoughtsRoutes = require("./thoughts");
const reactionsRoutes = require("./reaction");
const usersRouters = require("./users");

router.use("/friends", friendsRoutes);
router.use("/thoughts", thoughtsRoutes);
router.use("/reactions", reactionsRoutes);
router.use("/users", usersRouters);

module.exports = router;
