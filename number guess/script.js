"use strict";
//TESTING STUFF
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number :)";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 10;
document.querySelector(".between").textContent = "(Between 1 and 15)";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 15;
let highscore = 0;
document.querySelector(".score").textContent = 15;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage("Please input a valid number 🙂");
  }

  // when player wins
  else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#355b44";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    displayMessage("Correct number! You won 🏆");
    document.querySelector(".number").textContent = secretNumber;
  }

  // when guess !== number
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? " Try a lower number 🥸!"
          : "Try a higher number 🤓!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 😢");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 15) + 1;

  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
