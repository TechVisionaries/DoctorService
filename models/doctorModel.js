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
    experience: { 
      type: Number, 
      required: true 
    },
    availability: { 
      type: String, 
      required: true 
    },
    hospital: { 
      type: String 
    },
    imageUrl: { 
      type: String 
    } 
}, {
  timestamps: true
});

module.exports = mongoose.model("Doctor", doctorSchema);
