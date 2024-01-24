function getComputerChoice() {
  let result = Math.floor((Math.random() * 10) % 3);
  switch (result) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

function getPlayerChoice() {
  let choice = prompt("Enter Rock/Paper/Scissors : ").toLowerCase();
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return `Tie! ${playerSelection} cannot beat ${playerSelection}`;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "rock") {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}

function game() {
  let wins = 0;
  for (let i = 0; i <= 4; i++) {
    let temp = playRound(getPlayerChoice(), getComputerChoice());
    console.log(temp);
    if (temp.includes("Win")) {
      wins++;
    }
  }
  console.log(`Congrats! You win ${wins} times!`);
}
