function getComputerChoice() {
	let choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
	switch (playerSelection.toLowerCase()) {
		case "rock":
			if (computerSelection.toLowerCase() === "rock") return "It's a draw";
			else if (computerSelection.toLowerCase() === "paper")
				return "You lose! Paper beats Rock";
			else return "You win! Rock beats Scissors";
			break;

		case "paper":
			if (computerSelection.toLowerCase() === "rock")
				return "You win! Paper beats Rock";
			else if (computerSelection.toLowerCase() === "paper")
				return "It's a draw";
			else return "You lose! Scissors beats Paper";
			break;

		case "scissors":
			if (computerSelection.toLowerCase() === "rock")
				return "You lose! Rock beats Scissors";
			else if (computerSelection.toLowerCase() === "paper")
				return "You win! Scissors beats Paper";
			else return "It's a draw";
			break;

		default:
			return "Invalid input!";
	}
}