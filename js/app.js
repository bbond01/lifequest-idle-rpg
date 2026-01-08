// js/app.js
// Initializes player state, basic UI, and service worker registration.

let player = JSON.parse(localStorage.getItem("player")) || {
  energy: 0,
  gold: 0,
  shards: {
    common: 0,
    rare: 0,
    epic: 0,
    legendary: 0
  },
  heroes: [],
  inventory: {
    gear: [] // ← Step 1: gear system foundation
  }
};

function savePlayer() {
  localStorage.setItem("player", JSON.stringify(player));
}

function updateUI() {
  const energyEl = document.getElementById("energy");
  if (energyEl) {
    energyEl.textContent = player.energy;
  }
}

window.onload = () => {
  updateUI();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
};
