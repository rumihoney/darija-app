"use client";

import { useState } from "react";

import Alphabet from "../components/alphabet";
import FirstWords from "../components/firstwords";

export default function Home() {

  const [started, setStarted] = useState(false);
  const [section, setSection] = useState("learn");
  const [unit, setUnit] = useState<string | null>(null);


  // welcome page

  if (!started) {
    return (
      <main className="welcome">

        <h1>Welcome</h1>

        <div className="welcome-translation">
          <span className="welcome-arabic">مرحبا</span>
          <span className="welcome-latin">marhaba</span>
        </div>

        <p className="welcome-text">
          Learn Moroccan Darija one lesson at a time.
        </p>

        <button
          className="start-button"
          onClick={() => setStarted(true)}
        >
          Start Learning
        </button>

      </main>
    );
  }


  // unit 1: alphabet

  if (unit === "alphabet") {
    return (
      <Alphabet onBack={() => setUnit(null)} />
    );
  }


  // unit 2: first words

  if (unit === "first-words") {
    return (
      <FirstWords onBack={() => setUnit(null)} />
    );
  }


  // main app

  return (
    <>

      {/* learn */}

      {section === "learn" && (
        <main className="units-page">

          <h1>Choose a Unit</h1>

          <div className="unit-list">

            <button
              className="unit"
              onClick={() => setUnit("alphabet")}
            >
              <span>Unit 1</span>
              <strong>Alphabet</strong>
            </button>

            <button
              className="unit"
              onClick={() => setUnit("first-words")}
            >
              <span>Unit 2</span>
              <strong>First Words</strong>
            </button>

            <div className="unit locked">
              <span>Unit 3</span>
              <strong>People</strong>
              <small>Coming soon</small>
            </div>

            <div className="unit locked">
              <span>Unit 4</span>
              <strong>Food & Drink</strong>
              <small>Coming soon</small>
            </div>

            <div className="unit locked">
              <span>Unit 5</span>
              <strong>Everyday Darija</strong>
              <small>Coming soon</small>
            </div>

            <div className="unit locked">
              <span>Unit 6</span>
              <strong>Home</strong>
              <small>Coming soon</small>
            </div>

            <div className="unit locked">
              <span>Unit 7</span>
              <strong>Shopping</strong>
              <small>Coming soon</small>
            </div>

          </div>

        </main>
      )}


      {/* review */}

      {section === "review" && (
        <main className="page-content">

          <h1>Review</h1>

          <p>
            Flashcards and mistakes will appear here.
          </p>

        </main>
      )}


      {/* profile */}

      {section === "profile" && (
        <main className="page-content">

          <h1>Profile</h1>

          <p>
            Streaks, achievements, and account details will appear here.
          </p>

        </main>
      )}


      {/* bottom navigation */}

      <nav className="bottom-nav">

        <button
          className={`bottom-nav-button ${
            section === "learn" ? "active" : ""
          }`}
          onClick={() => setSection("learn")}
        >
          Learn
        </button>

        <button
          className={`bottom-nav-button ${
            section === "review" ? "active" : ""
          }`}
          onClick={() => setSection("review")}
        >
          Review
        </button>

        <button
          className={`bottom-nav-button ${
            section === "profile" ? "active" : ""
          }`}
          onClick={() => setSection("profile")}
        >
          Profile
        </button>

      </nav>

    </>
  );
}