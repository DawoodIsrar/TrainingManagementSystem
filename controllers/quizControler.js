const Quiz = require("../models/quiz");

const createQuiz = async (req, res) => {
  try {
    const { courseId } = req.body;

    // Perform validation checks on the required fields
    if (!courseId) {
      return res.status(400).json({ message: "No course selected" });
    }

    const quiz = await Quiz.create({
      courseId: courseId,
    });

    console.log("Quiz created:", quiz);
    return res.status(201).json({ message: "Quiz created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = createQuiz;
