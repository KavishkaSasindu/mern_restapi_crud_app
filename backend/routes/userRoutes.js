const express = require("express");
const adminController = require("../controller/userController");

const router = express.Router();

router.post("/api/admin", adminController.createAdmin);
router.get("/", adminController.getAdminData);
router.get("/api/:id", adminController.getOneAdminData);

module.exports = router;
