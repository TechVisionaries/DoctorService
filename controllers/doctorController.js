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
    const {
      name,
      specialization,
      availability,
      email,
      phone,
      hospital,
    } = req.body;

    const doctor = new Doctor({
      name,
      specialization,
      availability,
      email,
      phone,
      hospital,
    });

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

// Update a doctor by ID
const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({
        status: "fail",
        message: "Doctor not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: updatedDoctor,
    });
  } catch (error) {
    console.error("Error updating doctor:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Error updating doctor",
    });
  }
};

// Delete a doctor by ID
const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!deletedDoctor) {
      return res.status(404).json({
        status: "fail",
        message: "Doctor not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting doctor:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Error deleting doctor",
    });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
