function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const drum = document.querySelector(`.drum[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  drum.classList.add('active');
  setTimeout(() => drum.classList.remove('active'), 100);
}

document.addEventListener('keydown', e => playSound(e.keyCode));
document.querySelectorAll('.drum').forEach(d => d.addEventListener('click', () => playSound(d.dataset.key)));
