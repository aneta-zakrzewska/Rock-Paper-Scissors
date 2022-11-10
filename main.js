const options = document.querySelector(".options");
const paperBtn = document.querySelector("button.paper");
const rockBtn = document.querySelector("button.rock");
const scissorsBtn = document.querySelector("button.scissors");
const resultDisplay = document.querySelector(".result");

const choices = ["rock", "paper", "scissors"];
let userChoice = "";

const randomChoice = choices[Math.floor(Math.random() * choices.length)];

//RANDOM CHOICE GENERATOR AND CREATING MICKEY'S CHOICE BUTTON
let showMickeyChoice = (randomChoice) => {
	const mickeyBtnChoice = document.createElement("button");
	options.appendChild(mickeyBtnChoice);
	mickeyBtnChoice.classList.add(randomChoice);

	if (mickeyBtnChoice.classList.contains("rock")) {
		mickeyBtnChoice.innerHTML = '<img src="./img/rock.png" alt="rock"> ROCK';
	} else if (mickeyBtnChoice.classList.contains("paper")) {
		mickeyBtnChoice.innerHTML = '<img src="./img/paper.png" alt="paper"> PAPER';
	} else if (mickeyBtnChoice.classList.contains("scissors")) {
		mickeyBtnChoice.innerHTML =
			'<img src="./img/scissors.png" alt="scissors"> SCISSORS';
	}
};

//USER CHOICE:
const rockChosen = () => {
	document.getElementById("rock");
	userChoice = choices[0];
	options.removeChild(paperBtn);
	options.removeChild(scissorsBtn);
	getResults(userChoice, randomChoice, showMickeyChoice(randomChoice));
};

const paperChosen = () => {
	document.getElementById("paper");
	userChoice = choices[1];
	options.removeChild(rockBtn);
	options.removeChild(scissorsBtn);
	getResults(userChoice, randomChoice, showMickeyChoice(randomChoice));
};

const scissorsChosen = () => {
	document.getElementById("scissors");
	userChoice = choices[2];
	options.removeChild(paperBtn);
	options.removeChild(rockBtn);
	getResults(userChoice, randomChoice, showMickeyChoice(randomChoice));
};

//RESULTS DISPLAY:
const getResults = (userChoice, randomChoice) => {
	if (
		(userChoice === "rock" && randomChoice === "scissors") ||
		(userChoice === "scissors" && randomChoice === "paper") ||
		(userChoice === "paper" && randomChoice === "rock")
	) {
		resultDisplay.innerHTML =
			"You chose " +
			userChoice +
			" and Mickey chose " +
			randomChoice +
			", YOU WIN!";
	} else if (
		(userChoice === "scissors" && randomChoice === "rock") ||
		(userChoice === "paper" && randomChoice === "scissors") ||
		(userChoice === "rock" && randomChoice === "paper")
	) {
		resultDisplay.innerHTML =
			"You chose " +
			userChoice +
			" and Mickey chose " +
			randomChoice +
			", YOU LOSE!";
	} else {
		resultDisplay.innerHTML =
			"You chose " +
			userChoice +
			" and Mickey chose " +
			randomChoice +
			", IT'S A DRAW!";
	}
};

//GAME OVER:
const resetGame = document.getElementById('reset-game')
resetGame.addEventListener("click", () => {
	window.location.reload()
})

rockBtn.addEventListener("click", rockChosen);
paperBtn.addEventListener("click", paperChosen);
scissorsBtn.addEventListener("click", scissorsChosen);
