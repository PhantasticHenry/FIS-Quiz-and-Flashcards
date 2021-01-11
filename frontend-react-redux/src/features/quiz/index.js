import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Quiz.css";
import Answers from "../../components/answers";
import Question from "../../components/question";
import Result from "../../components/result";
import { startQuiz } from "../../actions/quiz/startQuiz";
// import { getFlashcards } from "../../actions/flashcard/getFlashcards";
import { getQuizFlashcards } from "../../actions/getQuizFlashcards";

function Quiz(props) {
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
    {
      id: 3,
      question: "7 + 3",
      correct_answer: "10",
      incorrect_answers: ["11", "12", "13"],
    },
    {
      id: 4,
      question: "7 + 4",
      correct_answer: "11",
      incorrect_answers: ["15", "12", "13"],
    },
    {
      id: 5,
      question: "6 + 7",
      correct_answer: "13",
      incorrect_answers: ["11", "12", "23"],
    },
    {
      id: 6,
      question: "1 + 7",
      correct_answer: "8",
      incorrect_answers: ["121", "9", "23"],
    },
  ];
  const category = props.location.category;
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [quizID, setQuizID] = useState(undefined);
  // const [category, setCategory] = useState("");

  const quizzes = useSelector((state) => state.quizzes);

  let question = SAMPLE_QUESTIONS[index].question;
  let correct_answer = SAMPLE_QUESTIONS[index].correct_answer;
  let incorrect_answers = SAMPLE_QUESTIONS[index].incorrect_answers;
  let answers = [...incorrect_answers, correct_answer];

  // useEffect(() => {
  //   dispatch(getFlashcards());
  // }, []);

  useEffect(() => {
    // setCategory(props.location.category);
    const newQuiz = {
      player: "",
      high_score: 0,
      category: category,
    };
    dispatch(startQuiz(newQuiz));
    // setQuizID(quizzes[quizzes.length - 1].quiz.id);
  }, []);

  useEffect(() => {
    console.log("quizzes", quizzes);
    // setQuizID(quizzes[quizzes.length - 1].quiz.id);
    // quizzes[quizzes.length - 1].quiz.id !== undefined
    quizzes.length >= 1
      ? setQuizID(quizzes[quizzes.length - 1].quiz.id)
      : console.log("Something is wrong");
    console.log("QUIZ ID", quizID);
  }, [quizzes]);

  // useEffect(() => {
  //   dispatch(getQuizFlashcards(quizID));
  // }, []);

  const nextQuestion = () => {
    setIndex(index + 1);
  };

  const checkAnswer = (answer) => {
    if (answer === correct_answer) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const handleClick = (e) => {
    if (index >= SAMPLE_QUESTIONS.length) {
      setGameFinished(true);
    } else {
      checkAnswer(e.currentTarget.value.toString());
      nextQuestion();
    }
  };
  10;

  console.log(SAMPLE_QUESTIONS.pop());

  return (
    <div className="quiz-container">
      {gameFinished ? (
        <>
          <Result correct={correct} incorrect={incorrect} />
        </>
      ) : (
        <>
          <Question question={question} />
          <Answers answers={answers} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default Quiz;
