import "../styles/quiz.css";

import cold from "../assets/cold.png";
import hot from "../assets/hot.png";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import home from "../assets/home.png";
import cafe from "../assets/cafe.png";
import { useState } from "react";

const quizData = [
  {
    id: 1,
    question: "How do you like your coffee?",
    options: [
      { text: "Hot ☕", bg: hot, value: "hot" },
      { text: "Cold 🧊", bg: cold, value: "cold" },
    ],
  },
  {
    id: 2,
    question: "How strong do you like it?",
    options: [
      { text: "Light", bg: light, value: "light" },
      { text: "Strong", bg: dark, value: "strong" },
    ],
  },
  {
    id: 3,
    question: "Where do you enjoy coffee the most?",
    options: [
      { text: "At home 🏠", bg: home, value: "home" },
      { text: "Café ☕", bg: cafe, value: "cafe" },
    ],
  },
];
function Quiz() {
  //INITALISATION OF STATES
  const [currentIndex, setCurrentIdex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [bgImg, setBgImg] = useState(null);
  const currentQuestion = quizData[currentIndex];
  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
    setBgImg(option.bg);
  };

  function handleNext() {
    if (currentIndex < quizData.length - 1) {
      setCurrentIdex(currentIndex + 1);
      setSelectedOption(null);
      setBgImg(null);
    }
  }

  return (
    <div className="quiz-page">
      <div className="quiz-bg">
        <div style={{ backgroundImage: bgImg ? `url(${bgImg})` : "none" }}>
          <div className="quiz-card">
            <div className="heading">
              <h2>{currentQuestion.question}</h2>
            </div>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn${
                    selectedOption === option.value ? " active" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}>
                  {option.text}
                </button>
              ))}
            </div>

            <button
              className="next-btn"
              disabled={!selectedOption}
              onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
