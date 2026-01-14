// js/ui/ui-inventory.js
// Renders the gear inventory and allows equipping to the first hero for now.

function renderInventory(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (!player.inventory || !player.inventory.gear.length) {
    container.textContent = "No gear in inventory.";
    return;
  }

  player.inventory.gear.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "inventory-item";

    const label = document.createElement("span");
    label.textContent = `${item.name} [${item.slot}] ★${item.rarity}`;

    const btn = document.createElement("button");
    btn.textContent = "Equip to first hero";
    btn.onclick = () => {
      if (!player.heroes.length) {
        alert("You have no heroes yet.");
        return;
      }
      const heroId = player.heroes[0].id;
      equipGear(heroId, index);
      alert(`Equipped ${item.name} to ${player.heroes[0].name}`);
      renderInventory(containerId);
    };

    row.appendChild(label);
    row.appendChild(btn);
    container.appendChild(row);
  });
}
