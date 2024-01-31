import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const questionsList = [
  {
    id: 1,
    question: "what is access bank vision statement",
    answer: "To be the world's most respected african bank",
  },
  {
    id: 2,
    question: "what is access bank mission statement",
    answer:
      "Setting standards for sustainable business practices that unleash the talents of our employees, deliver superior value to our customers and provide innovative solutions for the markets and communities we serve",
  },
  {
    id: 3,
    question: "what is access bank Core Values",
    answer:
      "Leadership - Excellence - Empowered employees - Passion for customers - Professionalism - Innovation",
  },
];
function App() {
  const [selectedId, setSelectedId] = useState(0);

  function handleClick(id) {
    setSelectedId(id === selectedId ? 0 : id);
  }

  return (
    <div className="App">
      {questionsList.map((question) => (
        <div
          onClick={() => handleClick(question.id)}
          className={`qbox ${question.id === selectedId ? "answer" : ""}`}
        >
          {question.id === selectedId ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}

export default App;
