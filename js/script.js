function getComputerChoice () {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    // if (playerSelection == computerSelection) {
    //     return 'It\'s a tie! Better luck next time';
    // }
    // else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    //     return 'You Win! Rock beats Scissors';
    // }
    // else if (playerSelection == 'rock' && computerSelection == 'paper') {
    //     return 'You Lose! Paper beats Rock';
    // }
    // else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    //     return 'You Lose! Scissors beats Paper';
    // }
    // else if (playerSelection == 'paper' && computerSelection == 'rock') {
    //     return 'You Win! Paper beats Rock';
    // }
    // else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    //     return 'You Win! Scissors beats Paper'
    // }
    // else {
    //     return 'You Lose! Rock beats Scissors'
    // }

    if (playerSelection == computerSelection) {
        result.textContent = 'It\'s a tie!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        updatePlayerScore();
        result.textContent = 'You Won This Round!';
    }
    else {
        computerScore++;
        updateComputerScore();
        result.textContent = 'You Lost This Round!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Do you want to play rock, paper, or scissors?');
        let result = playRound(playerInput, getComputerChoice());

        if (result.includes('You Win!')) {
            playerScore++;
        }
        else {
            computerScore++;
        }
        console.log(result);
        console.log(`Player: ${playerScore} Computer: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You Win!');
    }
    else {
        console.log('You Lose! Better luck next time!');
    }
}