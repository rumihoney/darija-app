const answers = document.querySelectorAll(".answer");

const correctAnswer = "salam";

answers.forEach(function(answer) {
  answer.addEventListener("click", function() {

    const selectedAnswer = answer.dataset.answer;

    if (selectedAnswer === correctAnswer) {
      answer.style.backgroundColor = "#7558ac";
      console.log("Correct!");
    } else {
      answer.style.backgroundColor = "#7a2222";
      console.log("Incorrect!");
    }

  });
});