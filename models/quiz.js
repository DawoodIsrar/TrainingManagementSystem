const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const quizSchema = new Schema(
  {
    courseId: {
      type: Schema.Types.Mixed,
      require: true,
    },
    quizName: {
      type: Schema.Types.String,
      require: true,
      // unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
