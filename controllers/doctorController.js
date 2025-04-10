const Doctor = require("../models/doctorModel");

// GET /doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch doctors" });
  }
};

// GET /doctors/:id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving doctor" });
  }
};

// POST /doctors
const createDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    console.error("❌ Error creating doctor:", err.message);
    res.status(400).json({ message: "Failed to add doctor", error: err.message });
  }
};


module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor
};
