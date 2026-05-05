const emojis = ['🎮','🎲','🎯','🎪','🎨','🎭','🎬','🎵'];
let cards, flipped, matched, moves, canFlip;

function initGame() {
  const shuffled = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
  cards = shuffled.map((e, i) => ({id: i, emoji: e, flipped: false, matched: false}));
  flipped = []; matched = 0; moves = 0; canFlip = true;
  document.getElementById('moves').textContent = moves;
  document.getElementById('pairs').textContent = matched;
  render();
}

function render() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  cards.forEach((card, i) => {
    const btn = document.createElement('button');
    btn.className = 'card' + (card.flipped || card.matched ? ' flipped' : '');
    btn.textContent = card.flipped || card.matched ? card.emoji : '?';
    btn.onclick = () => flipCard(i);
    grid.appendChild(btn);
  });
}

function flipCard(i) {
  if (!canFlip || cards[i].flipped || cards[i].matched) return;
  cards[i].flipped = true;
  flipped.push(i);
  render();
  if (flipped.length === 2) {
    moves++;
    document.getElementById('moves').textContent = moves;
    canFlip = false;
    if (cards[flipped[0]].emoji === cards[flipped[1]].emoji) {
      cards[flipped[0]].matched = cards[flipped[1]].matched = true;
      matched++;
      document.getElementById('pairs').textContent = matched;
      flipped = []; canFlip = true;
      if (matched === 8) alert(`You won in ${moves} moves!`);
    } else {
      setTimeout(() => {
        cards[flipped[0]].flipped = cards[flipped[1]].flipped = false;
        flipped = []; canFlip = true;
        render();
      }, 1000);
    }
  }
}

initGame();
