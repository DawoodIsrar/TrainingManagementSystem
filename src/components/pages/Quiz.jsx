import React, { useState } from 'react';
import './Style.css';
import CourseCatalog from './CourseCatalog';
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'What is the C++?',
      options: ['Superset', 'Language', 'Framework', 'Labrary'],
      answer: 'Language'
    },
    {
      question: 'Who invanted www?',
      options: ['Tim berner li', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      answer: 'Tim berner li'
    },
    {
      question: 'What is the most famous language?',
      options: ['Javascript', 'Java', 'C++', 'C'],
      answer: 'Javascript'
    },
    {
      question: 'What is the most famous language?',
      options: ['Javascript', 'Java', 'C++', 'C'],
      answer: 'Javascript'
    },
    {
      question: 'What is the most famous language?',
      options: ['Javascript', 'Java', 'C++', 'C'],
      answer: 'Javascript'
    },
    {
      question: 'What is the most famous language?',
      options: ['Javascript', 'Java', 'C++', 'C'],
      answer: 'Javascript'
    },
  ];

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}<br></br>
          {(score >= 3)? "Pass":"Fail"}<br></br>
          <button className='btnQuiz' type='submit' onClick={"CourseCatalog"}>Go to Next</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1} / {questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
