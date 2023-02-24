const weapons = ["Rock", "Paper", "Scissors"];
function printChoices() {
	for (const [index, element] of weapons.entries()) {
		console.log(index + 1 + ": " + element);
	}
}
function getComputerChoice() {
	return weapons[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice());

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

function game() {
	let playerScore = 0,
		computerScore = 0;
	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1}/5`);
		console.log("Choose your weapon: ");
		printChoices();
		let playerSelection = Number(prompt("Enter your choice: (1/2/3)"));
		while (
			playerSelection != 1 &&
			playerSelection != 2 &&
			playerSelection != 3
		) {
			console.log("Invalid input! Try again");
			printChoices();
			playerSelection = Number(prompt("Enter your choice: (1/2/3)"));
		}
		let computerSelection = Math.floor(Math.random() * 3);
		let playerWeapon = weapons[playerSelection - 1],
			computerWeapon = weapons[computerSelection];
		let result = playRound(playerWeapon, computerWeapon);

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
				i--;
		}
	}

	if (playerScore > computerScore)
		console.log("Congratulations!! You win the game");
	else if (playerScore < computerScore)
		console.log("Better luck next time. You lose the game");
	else console.log("That was quite a game. You are tied after 5 rounds.");
	alert(`Final score You-${playerScore} Computer-${computerScore}`);
}
