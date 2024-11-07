const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let humanScore = 0;
let computerScore = 0;
let humanChoice = '';

const scoreHuman = document.querySelector(".scoreHuman");
const scoreComputer = document.querySelector(".scoreComputer");

const playRoundButton = document.querySelector(".playRoundButton");
playRoundButton.addEventListener("click",() =>
{
    playRound(humanChoice, getComputerChoice());
});

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", function () {
    humanChoice = 'rock';
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function () {
    humanChoice = 'paper';
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", function () {
    humanChoice = "scissors";
});

const result = document.querySelector(".result");

function getComputerChoice() { // generate random number between 0-2
    return Math.floor(Math.random() * 3);
}

// function getHumanChoice() { // ask user for input
//    console.log(event.target.tagName); 
//    return option;
//    }
    // return prompt('Type your choice').toLowerCase();

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock') && (computerChoice === 1)) {
        result.textContent = ('You lose! Paper beats Rock');
        computerScore++;
        scoreComputer.textContent = `Computer score: ${computerScore}`;
    }
    else if ((humanChoice === 'rock') && (computerChoice === 2)) {
        result.textContent = ('You win! Rock beats Scissors');
        humanScore++;
        scoreHuman.textContent = `Your score: ${humanScore}`;
    }
    else if ((humanChoice === 'paper') && (computerChoice === 0)) {
        result.textContent = ('You win! Paper beats Rock');
        humanScore++;
        scoreHuman.textContent = `Your score: ${humanScore}`
    }
    else if ((humanChoice === 'paper') && (computerChoice === 2)) {
        result.textContent = ('You lose! Scissors beats Paper');
        computerScore++;
        scoreComputer.textContent = `Computer score: ${computerScore}`;
    }
    else if ((humanChoice === 'scissors') && (computerChoice === 0)) {
        result.textContent = ('You lose! Rock beats Scissors');
        computerScore++;
        scoreComputer.textContent = `Computer score: ${computerScore}`;
    }
    else if ((humanChoice === 'scissors') && (computerChoice === 1)) {
        result.textContent = ('You win! Scissors beats Paper');
        humanScore++;
        scoreHuman.textContent = `Your score: ${humanScore}`;
    }
    else {
        result.textContent = ('It\'s a tie!');
    }
    humanChoice = '';
    if (humanScore === 5) {
        result.textContent = ("You've won!");
        humanScore = 0;
        computerScore = 0;
        scoreHuman.textContent = `Your score: ${humanScore}`;
        scoreComputer.textContent = `Computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        result.textContent = ("You've lost!");
        humanScore = 0;
        computerScore = 0;
        scoreHuman.textContent = `Your score: ${humanScore}`;
        scoreComputer.textContent = `Computer score: ${computerScore}`;
    }
}

/* function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(humanChoice, getComputerChoice()); 
    }
    humanScore > computerScore ? console.log(`Your score: ${humanScore}, Computer score: ${computerScore}. You win!`)
        : humanScore < computerScore ? console.log(`Your score: ${humanScore}, Computer score: ${computerScore}. You lose!`)
        : console.log(`Your score: ${humanScore}, Computer score: ${computerScore}. It's a tie!`);
} */

   