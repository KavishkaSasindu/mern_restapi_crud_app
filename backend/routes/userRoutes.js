const express = require("express");
const adminController = require("../controller/userController");

const router = express.Router();

router.post("/api/admin", adminController.createAdmin);
router.get("/", adminController.getAdminData);
router.get("/api/:id", adminController.getOneAdminData);
router.put("/api/updateAdmin/:id", adminController.updateAdminData);
router.put("/api/updateAdmin/:id", adminController.updateAdminData);
router.delete("/api/deleteAdmin/:id", adminController.deleteAdmin);

module.exports = router;
