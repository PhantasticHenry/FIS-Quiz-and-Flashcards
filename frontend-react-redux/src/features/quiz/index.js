import React from "react";

function Quiz() {
  const SAMPLE_QUESTIONS = [
    {
      id: 1,
      question: "2 + 2",
      correct_answer: "4",
      incorrect_answers: ["1", "2", "3"],
    },
    {
      id: 2,
      question: "7 + 7",
      correct_answer: "14",
      incorrect_answers: ["11", "12", "13"],
    },
  ];

  return <div>Quiz Component!!!</div>;
}

export default Quiz;
