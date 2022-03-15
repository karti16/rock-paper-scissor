let compScore = 0;
let playerScore = 0;
let matchTied = 0;
result = game();
console.log(result);

// Gets user input
function getUserInput() {
  let input = prompt(
    "Play! Input your option. Rock, Paper or Scissor",
    undefined
  );
  return input.toLowerCase();
}
//Random input as a player
function randomUserInput() {
  let option = ["rock", "paper", "scissor"];
  return option[Math.floor(Math.random() * 3)];
}

//Plays 5 rounds of game
function game() {
  for (let i = 1; i <= 5; i++) {
    let winner = gamePlay(computerPlay(), randomUserInput());
  }
  console.log(
    `Player : ${playerScore} Computer = ${compScore} Match Tied : ${matchTied}`
  );
  return playerScore > compScore
    ? "Player Won the series"
    : playerScore == compScore
    ? "Series Tied"
    : "Computer Won the series";
}
//Random input from computer
function computerPlay() {
  let option = ["rock", "paper", "scissor"];
  return option[Math.floor(Math.random() * 3)];
}
// Game and return the winner
function gamePlay(computerSelection, playerSelection) {
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
