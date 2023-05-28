const Quiz = require("../models/quiz");
const Quests = require("../models/question");
const mongoose = require("mongoose");

const quizesByCourseId = async (req, res) => {
  const quiz = await Quiz.find({ courseId: req?.body?.courseId });
  return res.status(200).json({ data: quiz });
};

module.exports = quizesByCourseId;
