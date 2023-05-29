const attemptedQuizez = require('../models/attemptedQuiz');
const quiz = require('../models/quiz');
const course = require('../models/course');
const mongoose = require('mongoose');

const reports = async (req, res) => {
  const existed = await attemptedQuizez.find({ studentId: req.body.studentId });
  console.log(existed);

  if (existed.length !== 0) {
    const quizIds = existed.map((data) => mongoose.Types.ObjectId(data.quizId));

    const getQuizesDetails = await quiz.aggregate([
      {
        $match: { _id: { $in: quizIds } },
      },
      {
        $lookup: {
          from: 'courses', // Corrected collection name
          localField: 'courseId',
          foreignField: '_id',
          as: 'courseDetails',
        },
      },
    ]);

    const responseData = existed.map((data) => {
      const quizData = getQuizesDetails.find((quiz) => quiz._id.toString() === data.quizId.toString());
      const courseData = quizData?.courseDetails[0] || {};

      return {
        ...data.toObject(),
        courseName: courseData.courseName || '',
        quizName: quizData?.quizName || '',
      };
    });

    return res.status(201).json({ responseData, message: 'Quiz attempted' });
  } else {
    return res
      .status(200)
      .json({ message: 'Sorry, you have not attempted any quiz for any course' });
  }
};

module.exports = reports;
