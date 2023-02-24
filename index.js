const weapons = ["Rock", "Paper", "Scissors"];

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
	let playerScore = 0,
		computerScore = 0;

	let computerSelection = getComputerChoice();
	let result = playRound(playerSelection, computerSelection);

	switch (result) {
		case "win":
			console.log(`You win! ${playerWeapon} beats ${computerWeapon}`);
			playerScore++;
			break;
		case "lose":
			console.log(`You lose! ${computerWeapon} beats ${playerWeapon}`);
			computerScore++;
			break;
		case "draw":
			console.log("It's a draw!");
			break;
		default:
			console.log("Some error occured. Please try again");
	}
}

const gameBtns = document.querySelectorAll(".rps-btn");
gameBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log(btn.dataset.weapon);
		game(btn.dataset.weapon);
	});
});