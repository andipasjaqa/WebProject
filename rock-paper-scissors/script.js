let playerScore = 0, computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById('playerChoice').textContent = `You: ${playerChoice}`;
  document.getElementById('computerChoice').textContent = `Computer: ${computerChoice}`;
  if (playerChoice === computerChoice) return document.getElementById('winner').textContent = "It's a tie!";
  if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
    playerScore++;
    document.getElementById('winner').textContent = 'You win!';
  } else {
    computerScore++;
    document.getElementById('winner').textContent = 'Computer wins!';
  }
  document.getElementById('score').textContent = `${playerScore} - ${computerScore}`;
}
