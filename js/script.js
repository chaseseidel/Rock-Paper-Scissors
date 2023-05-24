function getComputerChoice () {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection == computerSelection) {
        return 'It\'s a tie! Better luck next time';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper'
    }
    else {
        computerScore++;
        return 'You Lose! Rock beats Scissors'
    }
}

function updateScore(string) {
    results.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    result.textContent = string;
}

function declareWinner() {
    if (computerScore == 5) {
        result.textContent = 'You Lost!'
    }
    else if (playerScore == 5) {
        result.textContent = 'You Won!'
    }
}