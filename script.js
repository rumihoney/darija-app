const answers = document.querySelectorAll(".answer");
const continueButton = document.querySelector("#continue-btn");
const feedback = document.querySelector("#feedback");

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