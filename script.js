let compScore = 0;
let playerScore = 0;
let matchTied = 0;
let playerSelection = "";

const buttons = document.querySelectorAll(".option");
const resetButton = document.querySelector("#reset-game");

resetButton.addEventListener("click", function () {
  playerScore = 0;
  compScore = 0;
  matchTied = 0;
  document.getElementById(
    "current-score"
  ).textContent = `Player : ${playerScore} Computer = ${compScore} Match Tied : ${matchTied}`;
  document.getElementById("result").textContent = "";
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playerSelection = button.id;
    if (playerScore !== 5 && compScore !== 5) {
      gamePlay(playerSelection);
      document.getElementById(
        "current-score"
      ).textContent = `Player : ${playerScore} Computer = ${compScore} Match Tied : ${matchTied}`;
    }
    if (playerScore == 5 || compScore == 5) {
      document.getElementById("result").textContent =
        playerScore > compScore
          ? "Player Won the series"
          : playerScore == compScore
          ? "Series Tied"
          : "Computer Won the series";
    }
  });
});

// Game and return the winner
function gamePlay(playerSelection) {
  let computerSelection = computerPlay();
  let optionValue = {
    rock: 4,
    paper: 2,
    scissor: 1,
  };
  let sum = optionValue[computerSelection] + optionValue[playerSelection];
  //   console.log(
  //     `comp: ${computerSelection} | player : ${playerSelection} | sum : ${sum}`
  //   );

  switch (sum) {
    case 6:
      if (computerSelection == "rock") {
        playerScore++;
        return "Player";
      } else {
        compScore++;
        return "Computer";
      }
    case 5:
      if (computerSelection == "rock") {
        compScore++;
        return "Computer";
      } else {
        playerScore++;
        return "Player";
      }
    case 3:
      if (computerSelection == "paper") {
        playerScore++;
        return "Player";
      } else {
        compScore++;
        return "Computer";
      }
    case 8:
    case 4:
    case 2:
      matchTied++;
      return "Match Tied!";
    default:
      return "Check the program again";
  }
}

//Random input from computer
function computerPlay() {
  let option = ["rock", "paper", "scissor"];
  return option[Math.floor(Math.random() * 3)];
}
