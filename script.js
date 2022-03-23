let compScore = 0;
let playerScore = 0;
let matchTied = 0;
let playerSelection = "";

const buttons = document.querySelectorAll(".btn");
const resetButton = document.querySelector("#play-again");

resetButton.addEventListener("click", function () {
  playerScore = 0;
  compScore = 0;
  matchTied = 0;
  document.getElementById("overlay").style.display = "none";
  document.getElementById("user-score").innerHTML = 0;
  document.getElementById("comp-score").innerHTML = 0;
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playerSelection = button.id;
    document.getElementById("player-icon").textContent = button.textContent;
    if (playerScore !== 5 && compScore !== 5) {
      let winner = gamePlay(playerSelection);
      console.log(winner);
      if (winner == "Player") {
        document.getElementById("user-score").innerHTML = `${playerScore}`;
        document.getElementById(
          "reset"
        ).innerHTML = `You Won.<br>${playerScore} - ${compScore}`;
      } else {
        document.getElementById("comp-score").innerHTML = `${compScore}`;
        document.getElementById(
          "reset"
        ).innerHTML = `You Lose.<br>${playerScore} - ${compScore}`;
      }
    }
    if (playerScore == 5 || compScore == 5) {
      document.getElementById("overlay").style.display = "block";
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
  let optionIcon = { rock: "👊", paper: "✋", scissor: "✌" };
  let randNum = Math.floor(Math.random() * 3);
  document.getElementById("comp-icon").textContent =
    optionIcon[option[randNum]];
  return option[randNum];
}
