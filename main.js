const choice = document.querySelector("choice");
const button = document.querySelector("button");

const paperChosen = document.querySelector("#paper");
const rockChosen = document.querySelector("#rock");
const scissorsChosen = document.querySelector("#scissors");

const resultDisplay = document.querySelector(".result");
const choicesDisplay = document.querySelector(".choices");

let userChoice = [paperChosen, rockChosen, scissorsChosen];

paperChosen.addEventListener("click", e => console.log("paper"));
rockChosen.addEventListener("click", e => console.log("rock"));
scissorsChosen.addEventListener("click", e => console.log("scissors")); //moj wybor w konsoli

//make it after click:

let choices = ["rock", "paper", "scissors"];

let mickeyChoice = choices => {
	getResults(
		e.target.choices,
		choices[Math.floor(Math.random() * choices.length)]
	); //wybór myszki miki w konsoli
	console.log(mickeyChoice);
};

choices.forEach(choice => {
	const button = document.createElement("button");
	button.innerHTML = choice;
	button.addEventListener("click", choicesDisplay);
	choicesDisplay.appendChild(button);
});

//clicking on users choice causes running of mickeys choice

const getResults = (userChoice, mickeyChoice) => {
	if (
		(userChoice === 'rock' && mickeyChoice === 'scissors') ||
		(userChoice === 'scissors' && mickeyChoice === 'paper') ||
		(userChoice === 'paper' && mickeyChoice === 'rock')
	) {
		resultDisplay.innerHTML =
			'You chose ' +
			userChoice +
			' and Mickey chose ' +
			mickeyChoice +
			' , YOU WIN!';
	} else if (
		(userChoice === 'scissors' && mickeyChoice === 'rock') ||
		(userChoice === 'paper' && mickeyChoice === 'scissors') ||
		(userChoice === 'rock' && mickeyChoice === 'paper')
	) {
		resultDisplay.innerHTML =
			'You chose ' +
			userChoice +
			' and Mickey chose ' +
			mickeyChoice +
			' , YOU LOSE!';
	} else {
		resultDisplay.innerHTML =
			'You chose ' +
			userChoice +
			' and Mickey chose ' +
			mickeyChoice +
			' , ITS A DRAW!';
	}
};

button.addEventListener('click', getResults);
