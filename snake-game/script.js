const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const grid = 20;
let snake, food, dx, dy, score, gameLoop;

function startGame() {
  snake = [{x: 200, y: 200}];
  food = {x: Math.floor(Math.random() * 20) * grid, y: Math.floor(Math.random() * 20) * grid};
  dx = grid; dy = 0; score = 0;
  document.getElementById('score').textContent = score;
  clearInterval(gameLoop);
  gameLoop = setInterval(update, 100);
}

function update() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 || snake.some(s => s.x === head.x && s.y === head.y)) return startGame();
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById('score').textContent = score;
    food = {x: Math.floor(Math.random() * 20) * grid, y: Math.floor(Math.random() * 20) * grid};
  } else snake.pop();
  draw();
}

function draw() {
  ctx.fillStyle = '#2ecc71';
  ctx.fillRect(0, 0, 400, 400);
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, grid, grid);
  ctx.fillStyle = 'darkgreen';
  snake.forEach(s => ctx.fillRect(s.x, s.y, grid, grid));
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -grid; }
  if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = grid; }
  if (e.key === 'ArrowLeft' && dx === 0) { dx = -grid; dy = 0; }
  if (e.key === 'ArrowRight' && dx === 0) { dx = grid; dy = 0; }
});

startGame();
