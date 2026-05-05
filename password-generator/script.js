function updateLength() { document.getElementById('lengthVal').textContent = document.getElementById('length').value; }

function generatePassword() {
  const length = +document.getElementById('length').value;
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const nums = '0123456789';
  const syms = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let chars = '';
  if (document.getElementById('uppercase').checked) chars += upper;
  if (document.getElementById('lowercase').checked) chars += lower;
  if (document.getElementById('numbers').checked) chars += nums;
  if (document.getElementById('symbols').checked) chars += syms;
  if (!chars) return alert('Select at least one option!');
  document.getElementById('password').value = Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function copyPassword() {
  const pwd = document.getElementById('password');
  if (!pwd.value) return;
  navigator.clipboard.writeText(pwd.value);
  alert('Password copied!');
}

generatePassword();
