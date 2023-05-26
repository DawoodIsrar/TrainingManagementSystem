const Quiz = require("../models/quiz");
const course = require('../models/course');
const quest = require('../models/question');

const createQuiz = async (req, res) => {
  try {
    // Check if course exists or not
    const exist = await course.find({ title: req.body.courseName }).exec();

    // Perform validation checks on the required fields
    if (exist.length === 0) {
      return res.status(200).json({ message: "No course found with the entered name" });
    } else {
      const quiz = await Quiz.create({
        courseId: exist[0]._id,
      });
      const quizId = quiz._id;
      const { question, answers } = req.body;

      // Perform validation checks on the required fields
      if (!quizId || !question || !answers) {
        return res.status(400).json({ message: "Please fill in all the requirements" });
      }

      let quizExist = await Quiz.findOne({ _id: quizId }).exec();
      if (quizExist) {
        const questions = await quest.create({
          question: req.body.question,
          answers: req.body.answers,
          quizId: quizExist.id
        });
        console.log("Quiz created:", questions);
        return res.status(201).json({ message: "Question added to quiz successfully" });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = createQuiz;
