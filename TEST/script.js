// Tema (svetla/tamna)
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Pozdrav poruka
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const output = document.getElementById("output");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  output.textContent = name
    ? `Zdravo, ${name}! Drago mi je da učiš web dev. 🚀`
    : "Unesi ime pa klikni 'Pozdravi'.";
});

// Brojač klikova
const countBtn = document.getElementById("countBtn");
const countEl = document.getElementById("count");
let count = 0;

countBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = String(count);
});
