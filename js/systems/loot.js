// js/systems/loot.js
// Basic gear loot generation using GEAR_ITEMS and dungeon level.

function generateLoot(dungeonLevel) {
  if (!Array.isArray(GEAR_ITEMS) || GEAR_ITEMS.length === 0) {
    return null;
  }

  // Simple rarity scaling:
  // Higher dungeon levels unlock higher rarity gear.
  const maxRarity = Math.min(6, 1 + Math.floor(dungeonLevel / 2));

  // Filter gear items that are <= allowed rarity
  const candidates = GEAR_ITEMS.filter(item => item.rarity <= maxRarity);

  // Fallback if no candidates match
  const pool = candidates.length > 0 ? candidates : GEAR_ITEMS;

  // Pick a random item
  const baseItem = pool[Math.floor(Math.random() * pool.length)];

  // Return a copy so we can modify stats/levels later
  return {
    ...baseItem,
    stats: { ...baseItem.stats }
  };
}

function addLootToInventory(gearItem) {
  if (!gearItem) return;

  if (!player.inventory) {
    player.inventory = { gear: [] };
  }

  player.inventory.gear.push(gearItem);
  savePlayer();
}
