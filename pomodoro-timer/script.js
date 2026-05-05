let time = 25 * 60, timer = null, running = false;
const display = document.getElementById('display');

function updateDisplay() {
  const m = Math.floor(time / 60).toString().padStart(2, '0');
  const s = (time % 60).toString().padStart(2, '0');
  display.textContent = `${m}:${s}`;
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (time <= 0) { clearInterval(timer); running = false; alert('Time is up!'); return; }
    time--;
    updateDisplay();
  }, 1000);
}

function pauseTimer() { clearInterval(timer); running = false; }
function resetTimer() { clearInterval(timer); running = false; time = 25 * 60; updateDisplay(); }
function setTime(min) { clearInterval(timer); running = false; time = min * 60; updateDisplay(); }
updateDisplay();
