const playerInput = "Rock";
let compScore = 0;
let playerScore = 0;
result = game();
console.log(result);

function game() {
  compScore = 0;
  playerScore = 0;
  for (let i = 0; i < 5; i++) {
    gamePlay(computerPlay(), playerInput.toLowerCase());
  }
  return playerScore > compScore
    ? "Player Won the series"
    : "Computer Won the series";
}

function computerPlay() {
  let option = ["rock", "paper", "scissor"];
  return option[Math.floor(Math.random() * 3)];
}

function gamePlay(computerSelection, playerSelection) {
  let optionValue = {
    rock: 4,
    paper: 2,
    scissor: 1,
  };
  let sum = optionValue[computerSelection] + optionValue[playerSelection];
  console.log(
    `comp: ${computerSelection} | player : ${playerSelection} | sum : ${sum}`
  );

  switch (sum) {
    case 6:
      if (computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
      } else {
        compScore++;
        return "You Lose! Paper beats Rock";
      }
    case 5:
      if (computerSelection == "rock") {
        compScore++;
        return "You Lose! Rock beats Scissor";
      } else {
        playerScore++;
        return "You Win! Rock beats Scissor";
      }
    case 3:
      if (computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissor beats Paper";
      } else {
        compScore++;
        return "You Lose! Scissor beats Paper";
      }
    case 8:
    case 4:
    case 2:
      return "Match Tied!";
    default:
      return "Check the program again";
  }
}
