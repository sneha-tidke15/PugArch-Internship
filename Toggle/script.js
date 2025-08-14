const modeSwitch = document.getElementById("modeSwitch");
const keyboardToggle = document.getElementById("keyboardToggle");

// Load saved mode
if (localStorage.getItem("mode") === "nebula") {
  document.body.classList.add("nebula");
  modeSwitch.checked = true;
  keyboardToggle.setAttribute("aria-checked", "true");
}

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle("nebula");
  const isNebula = document.body.classList.contains("nebula");

  modeSwitch.checked = isNebula;
  localStorage.setItem("mode", isNebula ? "nebula" : "day");
  keyboardToggle.setAttribute("aria-checked", isNebula ? "true" : "false");
}

// Click toggle
modeSwitch.addEventListener("change", toggleTheme);

// Keyboard toggle: space or enter on label
keyboardToggle.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault(); // avoid page scroll
    toggleTheme();
  }
});

// Global spacebar toggles theme
document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space" && document.activeElement !== keyboardToggle) {
    e.preventDefault();
    toggleTheme();
  }
});
