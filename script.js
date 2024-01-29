function getComputerChoice() {
  let result = Math.floor((Math.random() * 10) % 3);
  let choice;
  switch (result) {
    case 0:
      choice = "Rock";
      setBorderComputer(choice);
      return "Rock";
      break;
    case 1:
      choice = "Paper";
      setBorderComputer(choice);
      return "Paper";
      break;
    case 2:
      choice = "Scissors";
      setBorderComputer(choice);
      return "Scissors";
      break;
  }
}

function setBorderComputer(choice) {
  const compChoice = document.getElementById(choice);
  compChoice.style.border = "6px solid red";
  setTimeout(() => {
    clearSelected(compChoice);
  }, 2000);
}

// function getPlayerChoice() {
//   let choice = prompt("Enter Rock/Paper/Scissors : ").toLowerCase();
//   return choice.charAt(0).toUpperCase() + choice.slice(1);
// }

function playRound(playerSelection, computerSelection, text) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  if (playerSelection === computerSelection) {
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    text.textContent = `Tie! ${playerSelection} cannot beat ${playerSelection}`;
    return null;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      return "computer";
    } else {
      text.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      return "human";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      return "computer";
    } else {
      text.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      return "human";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      return "computer";
    } else {
      text.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      return "human";
    }
  }
}

function setScore(winner) {
  const winnerName = document.querySelector(`.${winner}`);
  switch (winnerName) {
    case null:
      break;
    default:
      console.log(winnerName);
      const winnerClass = winnerName.classList.value;
      const winnerPoint = parseInt(winnerName.childNodes[3].textContent);
      console.log(winnerPoint);
      switch (winnerClass) {
        case "human":
          winnerName.childNodes[3].textContent = winnerPoint + 1;
          break;
        case "computer":
          winnerName.childNodes[3].textContent = winnerPoint + 1;
          break;
        default:
          break;
      }
      if (winnerPoint === 4) {
        alert("Congrats!");
      }
      break;
  }
}

function clearSelected(button) {
  button.style.border = "0px";
}
// function game() {
//   let wins = 0;
//   for (let i = 0; i <= 4; i++) {
//     let temp = playRound(getPlayerChoice(), getComputerChoice());
//     console.log(temp);
//     if (temp.includes("Win")) {
//       wins++;
//     }
//   }
//   console.log(`Congrats! You win ${wins} times!`);
// }

const humanBoard = document.querySelector(".human-board");

humanBoard.addEventListener("click", (e) => {
  const button = e.target;

  const text = document.querySelector(".text");
  const buttonClass = button.classList.value;
  switch (buttonClass) {
    case "rock":
      button.style.border = "6px solid hsl(120, 100%, 30%)";
      setScore(playRound(buttonClass, getComputerChoice(), text));
      setTimeout(() => {
        clearSelected(button);
      }, 2000);
      break;
    case "paper":
      button.style.border = "6px solid hsl(120, 100%, 30%)";
      setScore(playRound(buttonClass, getComputerChoice(), text));
      setTimeout(() => {
        clearSelected(button);
      }, 2000);
      break;
    case "scissors":
      button.style.border = "6px solid hsl(120, 100%, 30%)";
      setScore(playRound(buttonClass, getComputerChoice(), text));
      setTimeout(() => {
        clearSelected(button);
      }, 2000);
      break;
  }
});
