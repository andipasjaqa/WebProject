const questions = [
  {q: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1},
  {q: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], answer: 2},
  {q: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], answer: 1},
  {q: 'What is the largest mammal?', options: ['Elephant', 'Giraffe', 'Blue Whale', 'Shark'], answer: 2},
  {q: 'How many continents are there?', options: ['5', '6', '7', '8'], answer: 2}
];
let currentQ = 0, score = 0, answered = false;

function loadQuestion() {
  answered = false;
  document.getElementById('question').textContent = `${currentQ + 1}. ${questions[currentQ].q}`;
  const options = document.getElementById('options');
  options.innerHTML = '';
  questions[currentQ].options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    options.appendChild(btn);
  });
  document.getElementById('nextBtn').style.display = 'none';
}

function selectAnswer(i) {
  if (answered) return;
  answered = true;
  const opts = document.querySelectorAll('.option');
  opts.forEach((o, idx) => {
    if (idx === questions[currentQ].answer) o.classList.add('correct');
    if (idx === i && i !== questions[currentQ].answer) o.classList.add('wrong');
  });
  if (i === questions[currentQ].answer) { score++; document.getElementById('score').textContent = `Score: ${score}/5`; }
  document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) loadQuestion();
  else {
    document.getElementById('question').textContent = `Quiz Complete! Final Score: ${score}/5`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'block';
  }
}

function restartQuiz() { currentQ = 0; score = 0; document.getElementById('score').textContent = 'Score: 0/5'; document.getElementById('restartBtn').style.display = 'none'; loadQuestion(); }
loadQuestion();
