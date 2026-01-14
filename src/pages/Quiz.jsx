import "../styles/quiz.css";

import cold from "../assets/cold.png";
import hot from "../assets/hot.png";
import dark from "../assets/dark";
import light from "../assets/light";
import home from "../assets/home.png";
import cafe from "../assets/cafe.png";
import { useState } from "react";

const quizData = [
  {
    id: 1,
    question: "How do you like your coffee?",
    options: [
      { text: "Hot ☕", bg: "hot.jpg", value: "hot" },
      { text: "Cold 🧊", bg: "cold.jpg", value: "cold" },
    ],
  },
  {
    id: 2,
    question: "How strong do you like it?",
    options: [
      { text: "Light", bg: "light.jpg", value: "light" },
      { text: "Strong", bg: "strong.jpg", value: "strong" },
    ],
  },
  {
    id: 3,
    question: "Where do you enjoy coffee the most?",
    options: [
      { text: "At home 🏠", bg: "home.jpg", value: "home" },
      { text: "Café ☕", bg: "cafe.jpg", value: "cafe" },
    ],
  },
];
function Quiz() {

  const [currentIndex , setCurrentIdex] = useState(0);
  const [selectedOption , setSelectedOption] = useState(null);
  const [bgImg , setBgImg] = useState(null);
  


  return (
    // <div className="background">
    //   <div>{quizData.map((question, index) => {})}</div>
    // </div>
  );
}

export default Quiz;
