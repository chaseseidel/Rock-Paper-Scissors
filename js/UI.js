let computerSelection;
let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#winner');

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    let result = playRound(playerSelection, computerSelection);
    updateScore(result);
    declareWinner()
}))
