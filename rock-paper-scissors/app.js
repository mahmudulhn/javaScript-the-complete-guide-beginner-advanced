const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let isGameRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();

    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function () {
    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < .67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }

};

function startGame() {
    if (isGameRunning) {
        return;
    }
    isGameRunning = true;
    console.log('Game starting...')
    const playerChoice = getPlayerChoice();
    // console.log(playerSelection);
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let massage = `You picked ${playerChoice}, computer picked ${computerChoice} therefore you `;
    if (winner === RESULT_DRAW) {
        massage += `had a draw`;
    } else if (winner === RESULT_PLAYER_WINS) {
        massage += `won`;
    } else {
        massage += `lost`;
    }
    alert(massage);
    isGameRunning = false;
}

startGameBtn.addEventListener('click', startGame);