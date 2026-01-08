// js/data/gear.js
// Base gear definitions: items, stats, slots, and rarities.

const GEAR_ITEMS = [
  {
    id: "gear_001",
    name: "Iron Sword",
    slot: "weapon",
    rarity: 2,
    stats: { atk: 25, hp: 0, def: 0, spd: 0 },
    set: "warrior",
    level: 1,
    maxLevel: 10
  },
  {
    id: "gear_002",
    name: "Leather Helmet",
    slot: "helmet",
    rarity: 1,
    stats: { atk: 0, hp: 50, def: 10, spd: 0 },
    set: null,
    level: 1,
    maxLevel: 10
  },
  {
    id: "gear_003",
    name: "Chainmail Armor",
    slot: "armor",
    rarity: 3,
    stats: { atk: 0, hp: 150, def: 30, spd: -5 },
    set: "guardian",
    level: 1,
    maxLevel: 10
  },
  {
    id: "gear_004",
    name: "Swift Boots",
    slot: "boots",
    rarity: 3,
    stats: { atk: 0, hp: 0, def: 0, spd: 20 },
    set: "scout",
    level: 1,
    maxLevel: 10
  },
  {
    id: "gear_005",
    name: "Warrior Charm",
    slot: "accessory",
    rarity: 4,
    stats: { atk: 40, hp: 50, def: 0, spd: 0 },
    set: "warrior",
    level: 1,
    maxLevel: 10
  }
];
