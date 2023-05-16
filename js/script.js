function getComputerChoice () {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'It\'s a tie! Better luck next time';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper'
    }
    else {
        return 'You Lose! Rock beats Scissors'
    }
}

