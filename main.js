const choice = document.querySelector(".choice");
const button = document.querySelector("button");

let paperChosen = document.querySelector("#paper");
const rockChosen = document.querySelector("#rock");
const scissorsChosen = document.querySelector("#scissors");

let resultDisplay = document.querySelector(".result");

const choices = ["rock", "paper", "scissors"];


const chujwie = (e) => {
	if(e.target.matches("#paper")) {
		return userChoice === 'paper'
	} else if (e.target.matches('#rock')) {
		return userChoice === 'rock'
	} else { 
		return userChoice === 'scissors'}
	}



rockChosen.addEventListener('click', chujwie)
scissorsChosen.addEventListener('click', chujwie)
	paperChosen.addEventListener('click', chujwie)

	const userChoice = () => {
		console.log('eee');
	}
userChoice.appendChild(resultDisplay)




const getResults = (userChoice, mickeyChoice = choices[Math.floor(Math.random() * choices.length)]) => {
	if (
		(userChoice === "rock" && mickeyChoice === "scissors") ||
		(userChoice === "scissors" && mickeyChoice === "paper") ||
		(userChoice === "paper" && mickeyChoice === "rock")
	) {
		resultDisplay.innerHTML =
			"You chose " +
			userChoice +
			" and Mickey chose " +
			mickeyChoice +
			" , YOU WIN!";
	} else if (
		(userChoice === "scissors" && mickeyChoice === "rock") ||
		(userChoice === "paper" && mickeyChoice === "scissors") ||
		(userChoice === "rock" && mickeyChoice === "paper")
	) {
		resultDisplay.innerHTML =
			"You chose " +
			userChoice +
			" and Mickey chose " +
			mickeyChoice +
			" , YOU LOSE!";
	} else {
		resultDisplay.innerHTML =
			"You chose " +
			userChoice +
			" and Mickey chose " +
			mickeyChoice +
			" , ITS A DRAW!";
	}
};

button.addEventListener("click", getResults);
