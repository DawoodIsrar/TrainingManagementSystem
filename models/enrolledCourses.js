const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const enrolledCourses = new Schema(
  {
    courseId: {
      type: String,
      // trim: true,
      required: true,
      // unique:true,
    },
    studentId: {
      type: String,
      // trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EnrolledCourses", enrolledCourses);
