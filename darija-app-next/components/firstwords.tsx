"use client";

import { useState } from "react";

type FirstWordsProps = {
  onBack: () => void;
};

export default function FirstWords({ onBack }: FirstWordsProps) {

  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState("Select the correct answer");
  const [feedbackColor, setFeedbackColor] = useState("#f4eddf");
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const correctAnswer = "salam";

  function checkAnswer(answer: string) {

    if (answered) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === correctAnswer) {

      setFeedback("Correct!");
      setFeedbackColor("#1d7be7");
      setAnswered(true);

    } else {

      setFeedback("Wrong answer!");
      setFeedbackColor("#e92727");

      setTimeout(() => {

        setSelectedAnswer(null);
        setFeedback("Try again!");
        setFeedbackColor("#f4eddf");

      }, 1000);

    }
  }

  return (
    <main className="quiz">

      <button
        className="back-button"
        onClick={onBack}
      >
        Back
      </button>

      <h1>
        How do you say<br />"hello" in Darija?
      </h1>

      <div className="answers">

        <button
          className="answer"
          onClick={() => checkAnswer("salam")}
          style={{
            backgroundColor:
              selectedAnswer === "salam"
                ? "#1d7be7"
                : "#000"
          }}
        >
          <span className="arabic">سلام</span>
          <span className="latin">salam</span>
        </button>

        <button
          className="answer"
          onClick={() => checkAnswer("shukran")}
          style={{
            backgroundColor:
              selectedAnswer === "shukran"
                ? "#e92727"
                : "#000"
          }}
        >
          <span className="arabic">شكرا</span>
          <span className="latin">shukran</span>
        </button>

        <button
          className="answer"
          onClick={() => checkAnswer("bslama")}
          style={{
            backgroundColor:
              selectedAnswer === "bslama"
                ? "#e92727"
                : "#000"
          }}
        >
          <span className="arabic">بسلامة</span>
          <span className="latin">bslama</span>
        </button>

        <button
          className="answer"
          onClick={() => checkAnswer("fin")}
          style={{
            backgroundColor:
              selectedAnswer === "fin"
                ? "#e92727"
                : "#000"
          }}
        >
          <span className="arabic">فين</span>
          <span className="latin">fin</span>
        </button>

      </div>

      <p
        id="feedback"
        style={{ color: feedbackColor }}
      >
        {feedback}
      </p>

    </main>
  );
}