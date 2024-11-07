const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { // generate random number between 0-2
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() { // ask user for input
    return prompt('Type your choice').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock') && (computerChoice === 1)) {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    }
    else if ((humanChoice === 'rock') && (computerChoice === 2)) {
        console.log('You win! Rock beats Scissors');
        humanScore++;
    }
    else if ((humanChoice === 'paper') && (computerChoice === 0)) {
        console.log('You win! Paper beats Rock');
        humanScore++;
    }
    else if ((humanChoice === 'paper') && (computerChoice === 2)) {
        console.log('You lose! Scissors beats Paper');
        computerScore++;
    }
    else if ((humanChoice === 'scissors') && (computerChoice === 0)) {
        console.log('You lose! Rock beats Scissors');
        computerScore++;
    }
    else if ((humanChoice === 'scissors') && (computerChoice === 1)) {
        console.log('You win! Scissors beats Paper');
        humanScore++;
    }
    else {
        console.log('It\'s a tie!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
    }
    humanScore > computerScore ? console.log(`Your score: ${humanScore}, Computer score: ${computerScore}. You win!`)
        : humanScore < computerScore ? console.log(`Your score: ${humanScore}, Computer score: ${computerScore}. You lose!`)
        : console.log(`Your score: ${humanScore}, Computer score: ${computerScore}. It's a tie!`);
}

playGame();