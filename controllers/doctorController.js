const Doctor = require("../models/doctorModel");

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error.message);
    return res.status(500).json({
      status: "fail",
      message: "Failed to fetch doctors",
    });
  }
};

// Get a doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "Doctor not found",
      });
    }

    return res.status(200).json(doctor);
  } catch (error) {
    console.error("Error retrieving doctor:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Error retrieving doctor",
    });
  }
};

// Create a new doctor
const createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    const savedDoctor = await doctor.save();

    return res.status(201).json({
      status: "success",
      data: savedDoctor,
    });
  } catch (error) {
    console.error("Error creating doctor:", error.message);
    return res.status(400).json({
      status: "fail",
      message: "Failed to create doctor",
      error: error.message,
    });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
};
