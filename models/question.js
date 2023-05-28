const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const questionSchema = new Schema(
  {
    question: {
      type: Schema.Types.Mixed,
      require: true,
    },
    answers: {
      type: Schema.Types.Mixed,
    },
    quizId: {
      type: Schema.Types.Mixed,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Questions", questionSchema);
