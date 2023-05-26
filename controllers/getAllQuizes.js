const quiz = require('../models/quiz');
const question = require('../models/question');
const mongoose = require("mongoose");
const getAllQuiz = async (req, res) => {
  try {

    const exist = await quiz.find({courseId:req.body.courseId});
    console.log(exist)
    if(exist.length>0){
      const test = exist.map(
        (data) =>{
          console.log(data?.quizId) 
          new mongoose.Types.ObjectId(data?.quizId)
        }
      );
      const getQuestions = await question.aggregate([
        {
          $match: { _id: { $in: test } },
          // $lookup: {
          //   from: "Courses",
          //   localField: "_id",
          //   foreignField: "courseId",
          //   as: "coursesDetails",
          // },
        },
      ]);
      return res.status(200).json({
        data: getQuestions,
        message: "here is the quiz questions",
      });
    }else{
      return res.status(200).json({message:"sorry quiz not exist for relevent course"})
    }
   
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = getAllQuiz;
