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

// PUT /doctors/:id
const updateDoctor = async (req, res) => {
  const { name, specialization, availability, email, phone } = req.body;

  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { name, specialization, availability, email, phone },
      { new: true }
    );

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

// DELETE /doctors/:id
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};

