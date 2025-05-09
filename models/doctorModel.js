const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    specialization: { 
      type: String, 
      required: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    availability: { 
      type: String, 
      required: true 
    },
    hospital: { 
      type: String 
    }
}, {
  timestamps: true
});

module.exports = mongoose.model("Doctor", doctorSchema);
