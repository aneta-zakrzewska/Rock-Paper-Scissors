const buttons = document.querySelectorAll("button");
const paperBtn = document.querySelector("button .paper");
const rockBtn = document.querySelector("button .rock");
const scissorsBtn = document.querySelector("button .scissors");
const resultDisplay = document.querySelector(".result");
const mickeyChoice = document.querySelector(".mickey-choice");

const choices = ["rock", "paper", "scissors"];
let userChoice;

console.log(choices[0]);

//USER CHOICE:
userChoice = choices[0]




//RANDOM CHOICE GENERATOR AND MICKEY'S CHOICE
const randomChoice = choices[Math.floor(Math.random() * choices.length)];
mickeyChoice.innerHTML = "Mickey chose: " + randomChoice;
console.log("Wybór Mickiego: " + randomChoice);

//CREATING MICKEY'S CHOICE BUTTON & IMAGE:
const mickeyBtnChoice = document.querySelector(".mickey-choice-button");

const showImage = () => {
	mickeyBtnChoice.classList.add(randomChoice);
};

//cos tu nie działa:
if (mickeyBtnChoice.classList.contains(rock)) {
	mickeyBtnChoice.innerHTML = '<img src="./img/rock.png" alt="rock">';
} else if (mickeyBtnChoice.classList.contains(paper)) {
	mickeyBtnChoice.innerHTML = '<img src="./img/paper.png" alt="paper">';
} else if (mickeyBtnChoice.classList.contains(scissors)) {
	mickeyBtnChoice.innerHTML = '<img src="./img/scissors.png" alt="scissors">';
} else {
	mickeyBtnChoice.innerHTML = "no kurwo działaj";
}

//mickeyBtnChoice.addEventListener("click", userChoice)
console.log(randomChoice);

//const getResult() {resultDisplay.innerHTML = 'chujemuje'}

//buttons.addEventListener("click", getResult)

resultDisplay.innerHTML = "MICKEY CHOSE: " + randomChoice.toUpperCase() + " & YOU CHOSE: " + userChoice.toUpperCase() + "..."

