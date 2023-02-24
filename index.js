const weapons = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
	computerScore = 0;

function getComputerChoice() {
	return weapons[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	const possibleResults = ["win", "lose", "draw", "error"];
	let result = -1;
	switch (playerSelection.toLowerCase()) {
		case "rock":
			if (computerSelection.toLowerCase() === "rock") result = 2;
			else if (computerSelection.toLowerCase() === "paper") result = 1;
			else result = 0;
			break;

		case "paper":
			if (computerSelection.toLowerCase() === "rock") result = 0;
			else if (computerSelection.toLowerCase() === "paper") result = 2;
			else result = 1;
			break;

		case "scissors":
			if (computerSelection.toLowerCase() === "rock") result = 1;
			else if (computerSelection.toLowerCase() === "paper") result = 0;
			else result = 2;
			break;
		default:
			result = 3;
			break;
	}

	return possibleResults[result];
}

function game(playerSelection) {
	let computerSelection = getComputerChoice();
	let result = playRound(playerSelection, computerSelection);

	switch (result) {
		case "win":
			playerScore++;
			return `You win! ${playerSelection} beats ${computerSelection}`;
		case "lose":
			computerScore++;
			return `You lose! ${computerSelection} beats ${playerSelection}`;
		case "draw":
			return "It's a draw!";
		default:
			return "Some error occured. Please try again";
	}
}

const gameBtns = document.querySelectorAll(".rps-btn");
const resultDisplay = document.querySelector("#result-display");
const scoreDisplay = document.querySelector("#score-display");

gameBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log(btn.dataset.weapon);
		resultDisplay.textContent = game(btn.dataset.weapon);
		scoreDisplay.textContent = `You ${playerScore} - ${computerScore} Computer`;
	});
});