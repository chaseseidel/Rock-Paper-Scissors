function getComputerChoice () {
    const CHOICES = ['Rock', 'Paper', 'Scissors'];
    const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}