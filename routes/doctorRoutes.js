const express = require("express");
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  createDoctor,
} = require("../controllers/doctorController");

const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.post("/", createDoctor);


//router.post("/", authMiddleware, isAdmin, createDoctor);

module.exports = router;

