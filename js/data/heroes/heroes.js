// js/data/heroes.js
// Base hero definitions for LifeQuest Idle RPG.
// Each hero includes base stats and empty gear slots for the gear system.

const HEROES = [
  {
    id: "hero_flame_knight",
    name: "Flame Knight",
    rarity: 3,
    role: "warrior",
    element: "fire",

    baseStats: {
      hp: 1200,
      atk: 150,
      def: 90,
      spd: 100
    },

    gear: {
      weapon: null,
      helmet: null,
      armor: null,
      boots: null,
      accessory: null
    }
  },

  {
    id: "hero_frost_mage",
    name: "Frost Mage",
    rarity: 4,
    role: "mage",
    element: "ice",

    baseStats: {
      hp: 900,
      atk: 200,
      def: 70,
      spd: 110
    },

    gear: {
      weapon: null,
      helmet: null,
      armor: null,
      boots: null,
      accessory: null
    }
  },

  {
    id: "hero_earth_guardian",
    name: "Earth Guardian",
    rarity: 2,
    role: "tank",
    element: "earth",

    baseStats: {
      hp: 1500,
      atk: 90,
      def: 140,
      spd: 80
    },

    gear: {
      weapon: null,
      helmet: null,
      armor: null,
      boots: null,
      accessory: null
    }
  },

  {
    id: "hero_storm_archer",
    name: "Storm Archer",
    rarity: 3,
    role: "ranger",
    element: "wind",

    baseStats: {
      hp: 1000,
      atk: 170,
      def: 80,
      spd: 130
    },

    gear: {
      weapon: null,
      helmet: null,
      armor: null,
      boots: null,
      accessory: null
    }
  }
];
