const Quiz = require('../models/quiz');
const quest = require('../models/question')
const createQuestion = async (req, res) => {
  try {
    const {quizId,question,answers} = req.body;

    // Perform validation checks on the required fields
    if (!quizId || !question || !answers) {
      return res.status(400).json({ message: "Please select the quiz first" });
    }
    let quizExist = await Quiz.findOne({ quizId }).exec();
    if(quizExist){
        const questions = quest.create({
            question:req.body.question,
            answers: req.body.answers,
            quizId:quizExist.id
        })
        console.log("Quiz created:", questions);
        return res.status(201).json({ message: "Question added to quiz created successfully" });
    }
   
   
    
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = createQuestion;
