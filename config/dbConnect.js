const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
