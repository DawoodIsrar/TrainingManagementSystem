const Quiz = require('../models/quiz');

const getAllQuiz = async (req, res) => {
  try {
    console.log(req.params.courseId)
    let quizes = await Quiz.find({courseId:req.params.courseId}).exec();
            console.log("Course created:",quizes)
            return res.status(201).json(quizes)
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = getAllQuiz;
