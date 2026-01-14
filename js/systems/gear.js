// js/systems/gear.js
// Core gear system: equip, unequip, and stat recalculation.

// Find a hero by ID in the player's hero list
function findHeroById(heroId) {
  return player.heroes.find(h => h.id === heroId);
}

// Calculate final stats = base stats + gear stats
function calculateHeroStats(hero) {
  const finalStats = {
    hp: hero.baseStats.hp,
    atk: hero.baseStats.atk,
    def: hero.baseStats.def,
    spd: hero.baseStats.spd
  };

  if (hero.gear) {
    for (const slot in hero.gear) {
      const item = hero.gear[slot];
      if (item && item.stats) {
        for (const stat in item.stats) {
          if (finalStats[stat] !== undefined) {
            finalStats[stat] += item.stats[stat];
          }
        }
      }
    }
  }

  return finalStats;
}

// Equip gear from inventory onto a hero
function equipGear(heroId, gearIndex) {
  const hero = findHeroById(heroId);
  if (!hero) return;

  const item = player.inventory.gear[gearIndex];
  if (!item) return;

  const slot = item.slot;
  if (!hero.gear || !(slot in hero.gear)) return;

  // If hero already has gear in that slot, return it to inventory
  const currentlyEquipped = hero.gear[slot];
  if (currentlyEquipped) {
    player.inventory.gear.push(currentlyEquipped);
  }

  // Equip new item
  hero.gear[slot] = item;

  // Remove from inventory
  player.inventory.gear.splice(gearIndex, 1);

  savePlayer();
}

// Unequip gear from a hero and return it to inventory
function unequipGear(heroId, slot) {
  const hero = findHeroById(heroId);
  if (!hero || !hero.gear || !hero.gear[slot]) return;

  const item = hero.gear[slot];
  hero.gear[slot] = null;
  player.inventory.gear.push(item);

  savePlayer();
}
