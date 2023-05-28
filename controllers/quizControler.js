const Quiz = require("../models/quiz");
const course = require("../models/course");
const quest = require("../models/question");

const createQuiz = async (req, res) => {
  try {
    // Check if course exists or not
    const exist = await Quiz.find({
      quizName: req.body.quizName,
      courseId: req?.body?.courseId,
    }).exec();

    // Perform validation checks on the required fields
    if (req.body.courseId == null) {
      return res.status(201).json({ message: "courseId Not Available" });
    } else if (req.body.quizName == "") {
      return res.status(201).json({ message: "quiz name is required" });
    } else {
      if (exist.length !== 0) {
        return res.status(200).json({ message: "quiz already exists" });
      } else {
        const quiz = await Quiz.create({
          courseId: req?.body?.courseId,
          quizName: req.body.quizName,
        });
        return res.status(200).json({ message: "quiz added successfully" });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = createQuiz;
