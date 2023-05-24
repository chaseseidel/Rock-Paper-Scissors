let computerSelection;
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.results');
const buttons = document.querySelectorAll('.button');

// buttons.forEach(button => button.addEventListener('click', () => {
//     playerSelection = button.textContent;
//     let result = playRound(playerSelection, computerSelection);
//     updateScore(result);
//     declareWinner()
// }))

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    playRound(playerSelection, computerSelection);
}))

function updatePlayerScore() {
    const player = document.querySelector('.player-score');
    player.textContent = `Player Score: ${playerScore}`;
}

function updateComputerScore() {
    const computer = document.querySelector('.computer-score');
    computer.textContent = `Computer Score: ${computerScore}`;
}