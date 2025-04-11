const express = require("express");
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require("../controllers/doctorController");

const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.post("/", authMiddleware, isAdmin, createDoctor);
router.put('/:id', isAdmin, updateDoctor);
router.delete('/:id', isAdmin, deleteDoctor);


module.exports = router;

