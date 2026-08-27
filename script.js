// lesson logic

const answers = document.querySelectorAll(".answer");
const continueButton = document.querySelector("#continue-btn");
const feedback = document.querySelector("#feedback");

if (answers.length > 0) {

  const correctAnswer = "salam";

  let answered = false;

  answers.forEach(function(answer) {

    answer.addEventListener("click", function() {

      if (answered) {
        return;
      }

      const selectedAnswer = answer.dataset.answer;

      if (selectedAnswer === correctAnswer) {

        answer.style.backgroundColor = "#1d7be7";

        feedback.textContent = "Correct!";
        feedback.style.color = "#1d7be7";

        answered = true;
        continueButton.hidden = false;

      } else {

        answer.style.backgroundColor = "#e92727";

        feedback.textContent = "Wrong answer!";
        feedback.style.color = "#e92727";

        setTimeout(function() {

          answer.style.backgroundColor = "#000";

          feedback.textContent = "Try again!";
          feedback.style.color = "#f4eddf";

        }, 1000);

      }

    });

  });

}


// alphabet unit

const alphabetContainer = document.getElementById("alphabet");

if (alphabetContainer) {

  units.unit1.letters.forEach(function(letter) {

    const letterCard = document.createElement("div");

    letterCard.classList.add("letter-card");

    letterCard.innerHTML = `
      <span class="arabic">${letter.arabic}</span>
      <span class="latin">${letter.latin.join(" / ")}</span>
      <span class="ipa">${letter.ipa.join(" / ")}</span>
    `;

    alphabetContainer.appendChild(letterCard);

  });

}

// page navigation

function showPage(pageId, clickedButton = null) {

  document.querySelectorAll("main").forEach(function(page) {
    page.hidden = true;
  });

  document.getElementById(pageId).hidden = false;

  const bottomNav = document.getElementById("bottom-nav");
  const lessonBack = document.getElementById("lesson-back");

  // welcome page
  if (pageId === "welcome-page") {
    bottomNav.hidden = true;
    lessonBack.hidden = true;
  }

  // learn / review / profile pages
  else if (
    pageId === "unit-selection" ||
    pageId === "review-page" ||
    pageId === "profile-page"
  ) {
    bottomNav.hidden = false;
    lessonBack.hidden = true;
  }

  // individual units
  else {
    bottomNav.hidden = false;
    lessonBack.hidden = false;
  }

  document.querySelectorAll(".bottom-nav-button").forEach(function(button) {
    button.classList.remove("active");
  });

  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}