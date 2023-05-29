const express = require('express')
const attemptedQuizez = require('../models/attemptedQuiz');
const attempQuiz= async (req,res)=>{
    
    const existed = await attemptedQuizez.find({studentId:req.body.studentId,quizId:req.body.quizId})
  console.log(existed)
    if(existed.length == 0){
    await attemptedQuizez.create({
        quizId:req.body.quizId, 
        studentId:req.body.studentId,  
        score:req.body.score,
        total_marks:req.body.total    
    })
    return res.status(201).json({message:"quiz attempted"})
   }else{
    return res.status(200).json({message:"you have already attempted the quiz"})
   }   
}
module.exports = attempQuiz;