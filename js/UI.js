let computerSelection;
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.text');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', () => {
    const img = button.querySelector('img');
    playerSelection = img.alt.toLowerCase();
    playRound(playerSelection, computerSelection);
}))

function updatePlayerScore() {
    const player = document.querySelector('.player-score');
    player.textContent = `${playerScore}`;
    if (playerScore >= 5) {
        result.textContent = 'Congratulations! You won!';
        resetGame();
    }
    else {
        result.textContent = 'You Won This Round!';
    }
}

function updateComputerScore() {
    const computer = document.querySelector('.computer-score');
    computer.textContent = `${computerScore}`;
    if(computerScore >= 5) {
        result.textContent = 'Game Over. You Lost.';
        resetGame();
    }
    else {
        result.textContent = 'You Lost This Round!';
    }
}