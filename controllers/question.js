const Quiz = require("../models/quiz");
const Question = require("../models/question");
const mongoose = require("mongoose");

const addQuestion = async (req, res) => {
  if (req.body.quizId == null) {
    return res.status(201).json({ message: "quizId Not Available" });
  } else if (req.body.question == " ") {
    return res.status(201).json({ message: "question is required" });
  } else if (req.body.answers == null) {
    return res.status(201).json({ message: "answers is required" });
  } else {
    const add = await Question.create({
      quizId: req?.body?.quizId,
      question: req.body.question,
      answers: req.body.answers,
    });
    return res.status(200).json({ message: "question added successfully" });
  }
};
const viewQuestions = async (req, res) => {
  if (req.body.quizId == null) {
    return res.status(201).json({ message: "quizId Not Available" });
  } else {
    const requiredQuestions = await Question.find({
      quizId: req?.body?.quizId,
    });
    return res.status(200).json(requiredQuestions);
  }
};

module.exports = { viewQuestions, addQuestion };
