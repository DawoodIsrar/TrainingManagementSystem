const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const attemptedQuiz = new Schema(
  {
    quizId: {
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
    score: {
        type: String,
        // trim: true,
        required: true,
      },
      total_marks: {
        type: String,
        // trim: true,
        required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("attemptedQuiz", attemptedQuiz);
