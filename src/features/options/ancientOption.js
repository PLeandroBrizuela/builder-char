import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Barnake",
    Barnake: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { wizDmgRate: 10, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { statsEnergy: 20, name: "statsEnergy", multiplier: 0 },
        { skillDamage: 30, name: "skillDamage", multiplier: 0 },
        { mana: true, manaMax: 100, name: "manaMax", multiplier: 0 },
      ],
      effectAncient: [0, 1],
      partsEffect: [2, 3],
      optionsActivated: [0, 1, 4],
      partsAncient: ["Helm", "Pants", "Boots"],
      optionsInDOM: [
        ["Increase Wizardry Damage ", "Increase Energy ", "Increase Skill Damage ", "Increase Max. Mana "],
      ],
    },
  },
  {
    name: "Apollo",
    Apollo: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { statsEnergy: 10, name: "statsEnergy", multiplier: 0 },
        { wizDmgRate: 5, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { skillDamage: 10, name: "skillDamage", multiplier: 0 },
        { mana: true, manaMax: 30, name: "manaMax", multiplier: 0 },
        { hp: true, hpMax: 30, multiplier: 0, name: "hpMax" },
        { ag: true, agMax: 20, multiplier: 0, name: "agMax" },
        { criticalDamageRate: 10, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { excellentDamageRate: 10, multiplier: 0, name: "excellentDamageRate", rate: "%" },
        { statsEnergy: 30, name: "statsEnergy", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2, 3, 4, 5],
      partsEffect: [2, 3, 4, 5, 6, 7],
      optionsActivated: [0, 1, 2, 3, 4, 5, 6],
      partsAncient: ["Helm", "Armor", "Gloves", "Pants", "Weapon 1", "Pendant", "Ring"],
      optionsInDOM: [
        [
          "Increase Energy ",
          "Increase Wizardry Damage ",
          "Increase Skill Damage ",
          "Increase Max. Mana ",
          "Increase Max. Life ",
          "Increase Maximum AG ",
          "Increase Critical Damage Chance ",
          "Increase Excellent Damage Chance ",
          "Increase Energy ",
        ],
      ],
    },
  },
  {
    name: "Sylion",
    Sylion: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { doubleDamageRate: 5, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { criticalDamageRate: 5, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { defense: 20, name: "defense", multiplier: 0 },
        { statsStrength: 50, name: "statsStrength", multiplier: 0 },
        { statsAgility: 50, name: "statsAgility", multiplier: 0 },
        { statsStamina: 50, name: "statsStamina", multiplier: 0 },
        { statsEnergy: 50, name: "statsEnergy", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 2, 7],
      partsAncient: ["Helm", "Armor", "Gloves", "Boots"],
      optionsInDOM: [
        [
          "Double damage Chance ",
          "Increase Critical Damage Chance ",
          "Increase Defense ",
          "Increase Strength ",
          "Increase Agility ",
          "Increase Stamina ",
          "Increase Energy ",
        ],
      ],
    },
  },
  {
    name: "Evis",
    Evis: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { skillDamage: 15, name: "skillDamage", multiplier: 0 },
        { statsStamina: 20, name: "statsStamina", multiplier: 0 },
        { wizDmgRate: 10, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { doubleDamageRate: 5, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { atackRate: 50, name: "atackRate", multiplier: 0 },
        { AGValue: 5, name: "AGValue", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 2, 6],
      partsAncient: ["Armor", "Pants", "Boots", "Pendant"],
      optionsInDOM: [
        [
          "Increase Skill Damage ",
          "Increase Stamina ",
          "Increase Wizardry Damage ",
          "Double damage Chance ",
          "Increase Attack Rate ",
          "Increase AG Value ",
        ],
      ],
    },
  },
  {
    name: "Heras",
    Heras: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { statsStrength: 15, name: "statsStrength", multiplier: 0 },
        { wizDmgRate: 10, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { defenseShield: 5, name: "defenseShield", multiplier: 0 },
        { statsEnergy: 15, name: "statsEnergy", multiplier: 0 },
        { atackRate: 50, name: "atackRate", multiplier: 0 },
        { criticalDamageRate: 10, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { excellentDamageRate: 10, multiplier: 0, name: "excellentDamageRate", rate: "%" },
        { hp: true, hpMax: 50, multiplier: 0, name: "hpMax" },
        { mana: true, manaMax: 50, name: "manaMax", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2, 3, 4],
      partsEffect: [2, 3, 4, 5, 6],
      optionsActivated: [0, 1, 2, 3, 4, 9],
      partsAncient: ["Helm", "Armor", "Gloves", "Pants", "Boots", "Shield"],
      optionsInDOM: [
        [
          "Increase Strength ",
          "Increase Wizardry Damage ",
          "Increase defense when using shield weapons ",
          "Increase Energy ",
          "Increase Attack Rate ",
          "Increase Critical Damage Chance ",
          "Increase Excellent Damage Chance ",
          "Increase Max. Life ",
          "Increase Max. Mana ",
        ],
      ],
    },
  },
  {
    name: "Minet",
    Minet: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { statsEnergy: 30, name: "statsEnergy", multiplier: 0 },
        { defense: 30, name: "defense", multiplier: 0 },
        { mana: true, manaMax: 100, name: "manaMax", multiplier: 0 },
        { skillDamage: 15, name: "skillDamage", multiplier: 0 },
      ],
      effectAncient: [0, 1],
      partsEffect: [2, 3],
      optionsActivated: [0, 1, 4],
      partsAncient: ["Armor", "Pants", "Boots"],
      optionsInDOM: [["Increase Energy ", "Increase Defense ", "Increase Max. Mana ", "Increase Skill Damage "]],
    },
  },
  {
    name: "Anubis",
    Anubis: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { doubleDamageRate: 10, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { mana: true, manaMax: 50, name: "manaMax", multiplier: 0 },
        { wizDmgRate: 10, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { criticalDamageRate: 15, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { excellentDamageRate: 15, multiplier: 0, name: "excellentDamageRate", rate: "%" },
        { criticalDamage: 20, multiplier: 0, name: "criticalDamage" },
        { excellentDamage: 20, multiplier: 0, name: "excellentDamage" },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 2, 7],
      partsAncient: ["Helm", "Armor", "Gloves", "Ring"],
      optionsInDOM: [
        [
          "Double damage Chance ",
          "Increase Max. Mana ",
          "Increase Wizardry Damage ",
          "Increase Critical Damage Chance ",
          "Increase Excellent Damage Chance ",
          "Increase Critical Damage ",
          "Increase Excellent Damage ",
        ],
      ],
    },
  },
  {
    name: "Enis",
    Enis: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { skillDamage: 10, name: "skillDamage", multiplier: 0 },
        { doubleDamageRate: 10, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { statsEnergy: 30, name: "statsEnergy", multiplier: 0 },
        { wizDmgRate: 10, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { defenseIgnoreRate: 5, multiplier: 0, name: "defenseIgnoreRate", rate: "%" },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 2, 5],
      partsAncient: ["Helm", "Armor", "Gloves", "Boots"],
      optionsInDOM: [
        [
          "Increase Skill Damage ",
          "Double damage Chance ",
          "Increase Energy ",
          "Increase Wizardry Damage ",
          "Ignore Enemy's Defense ",
        ],
      ],
    },
  },
  {
    name: "Warrior",
    Warrior: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { statsStrength: 10, name: "statsStrength", multiplier: 0 },
        { skillDamage: 10, name: "skillDamage", multiplier: 0 },
        { ag: true, agMax: 20, multiplier: 0, name: "agMax" },
        { AGValue: 5, name: "AGValue", multiplier: 0 },
        { defense: 20, name: "defense", multiplier: 0 },
        { statsAgility: 10, name: "statsAgility", multiplier: 0 },
        { criticalDamageRate: 5, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { excellentDamageRate: 5, multiplier: 0, name: "excellentDamageRate", rate: "%" },
        { statsStrength: 25, name: "statsStrength", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2, 3, 4, 5],
      partsEffect: [2, 3, 4, 5, 6, 7],
      optionsActivated: [0, 1, 2, 3, 4, 5, 9],
      partsAncient: ["Helm", "Armor", "Gloves", "Pants", "Boots", "Weapon 1", "Ring"],
      optionsInDOM: [
        [
          "Increase Strength ",
          "Increase Skill Damage ",
          "Increase Maximum AG ",
          "Increase AG Value ",
          "Increase Defense ",
          "Increase Agility ",
          "Increase Critical Damage Chance ",
          "Increase Excellent Damage Chance ",
          "Increase Strength ",
        ],
      ],
    },
  },
  {
    name: "Anonymous",
    Anonymous: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { hp: true, hpMax: 50, multiplier: 0, name: "hpMax" },
        { statsAgility: 50, name: "statsAgility", multiplier: 0 },
        { defenseShield: 25, name: "defenseShield", multiplier: 0 },
        { damage: 30, name: "damage", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 4],
      partsAncient: ["Helm", "Pants", "Boots", "Shield"],
      optionsInDOM: [
        ["Increase Max. Life ", "Increase Agility ", "Increase defense when using shield weapons ", "Increase Damage "],
      ],
    },
  },
  {
    name: "Hyperion",
    Hyperion: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { statsEnergy: 15, name: "statsEnergy", multiplier: 0 },
        { statsAgility: 15, name: "statsAgility", multiplier: 0 },
        { skillDamage: 20, name: "skillDamage", multiplier: 0 },
        { mana: true, manaMax: 30, name: "manaMax", multiplier: 0 },
      ],
      effectAncient: [0, 1],
      partsEffect: [2, 3],
      optionsActivated: [0, 1, 4],
      partsAncient: ["Armor", "Pants", "Boots"],
      optionsInDOM: [["Increase Energy ", "Increase Agility ", "Increase Skill Damage ", "Increase Max. Mana "]],
    },
  },
  {
    name: "Eplete",
    Eplete: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { skillDamage: 15, name: "skillDamage", multiplier: 0 },
        { atackRate: 50, name: "atackRate", multiplier: 0 },
        { wizDmgRate: 5, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { hp: true, hpMax: 50, multiplier: 0, name: "hpMax" },
        { ag: true, agMax: 30, multiplier: 0, name: "agMax" },
        { criticalDamageRate: 10, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { excellentDamageRate: 10, multiplier: 0, name: "excellentDamageRate", rate: "%" },
      ],
      effectAncient: [0, 1, 2, 3],
      partsEffect: [2, 3, 4, 5],
      optionsActivated: [0, 1, 2, 3, 7],
      partsAncient: ["Helm", "Armor", "Pants", "Shield", "Pendant"],
      optionsInDOM: [
        [
          "Increase Skill Damage ",
          "Increase Attack Rate ",
          "Increase Wizardry Damage ",
          "Increase Max. Life ",
          "Increase Maximum AG ",
          "Increase Critical Damage Chance ",
          "Increase Excellent Damage Chance ",
        ],
      ],
    },
  },
  {
    name: "Berserker",
    Berserker: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { maxDmg: 10, name: "maxDmg", multiplier: 0 },
        { maxDmg: 20, name: "maxDmg", multiplier: 0 },
        { maxDmg: 30, name: "maxDmg", multiplier: 0 },
        { maxDmg: 40, name: "maxDmg", multiplier: 0 },
        { skillDamage: 40, name: "skillDamage", multiplier: 0 },
        { statsStrength: 40, name: "statsStrength", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2, 3],
      partsEffect: [2, 3, 4, 5],
      optionsActivated: [0, 1, 2, 3, 6],
      partsAncient: ["Helm", "Armor", "Gloves", "Pants", "Boots"],
      optionsInDOM: [
        [
          "Increase Max. Damage ",
          "Increase Max. Damage ",
          "Increase Max. Damage ",
          "Increase Max. Damage ",
          "Increase Skill Damage ",
          "Increase Strength ",
        ],
      ],
    },
  },
  {
    name: "Garuda",
    Garuda: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { ag: true, agMax: 30, multiplier: 0, name: "agMax" },
        { doubleDamageRate: 5, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { statsEnergy: 15, name: "statsEnergy", multiplier: 0 },
        { hp: true, hpMax: 50, multiplier: 0, name: "hpMax" },
        { skillDamage: 25, name: "skillDamage", multiplier: 0 },
        { wizDmgRate: 15, name: "wizDmgRate", rate: "%", multiplier: 0 },
      ],
      effectAncient: [0, 1, 2, 3],
      partsEffect: [2, 3, 4, 5],
      optionsActivated: [0, 1, 2, 3, 6],
      partsAncient: ["Armor", "Gloves", "Pants", "Boots", "Pendant"],
      optionsInDOM: [
        [
          "Increase Maximum AG ",
          "Double damage Chance ",
          "Increase Energy ",
          "Increase Max. Life ",
          "Increase Skill Damage ",
          "Increase Wizardry Damage ",
        ],
      ],
    },
  },
  {
    name: "Cloud",
    Cloud: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { criticalDamageRate: 20, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { criticalDamage: 50, multiplier: 0, name: "criticalDamage" },
      ],
      effectAncient: [0],
      partsEffect: [2],
      optionsActivated: [0, 2],
      partsAncient: ["Helm", "Pants"],
      optionsInDOM: [["Increase Critical Damage Chance ", "Increase Critical Damage "]],
    },
  },
  {
    name: "Kantata",
    Kantata: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { statsEnergy: 15, name: "statsEnergy", multiplier: 0 },
        { statsStamina: 30, name: "statsStamina", multiplier: 0 },
        { wizDmgRate: 10, name: "wizDmgRate", rate: "%", multiplier: 0 },
        { statsStrength: 15, name: "statsStrength", multiplier: 0 },
        { skillDamage: 25, name: "skillDamage", multiplier: 0 },
        { excellentDamageRate: 10, multiplier: 0, name: "excellentDamageRate", rate: "%" },
        { excellentDamage: 20, multiplier: 0, name: "excellentDamage" },
      ],
      effectAncient: [0, 1, 2, 3],
      partsEffect: [2, 3, 4, 5],
      optionsActivated: [0, 1, 2, 3, 7],
      partsAncient: ["Armor", "Gloves", "Boots", "Ring", "Ring"],
      optionsInDOM: [
        [
          "Increase Energy ",
          "Increase Stamina ",
          "Increase Wizardry Damage ",
          "Increase Strength ",
          "Increase Skill Damage ",
          "Increase Excellent Damage Chance ",
          "Increase Excellent Damage ",
        ],
      ],
    },
  },
  {
    name: "Rave",
    Rave: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { skillDamage: 20, name: "skillDamage", multiplier: 0 },
        { doubleDamageRate: 10, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { maxDmgTwohandedWeapon: 30, name: "maxDmgTwohandedWeapon" },
        { defenseIgnoreRate: 5, multiplier: 0, name: "defenseIgnoreRate", rate: "%" },
      ],
      effectAncient: [0, 1],
      partsEffect: [2, 3],
      optionsActivated: [0, 1, 4],
      partsAncient: ["Helm", "Armor", "Pants"],
      optionsInDOM: [
        [
          "Increase Skill Damage ",
          "Double damage Chance ",
          "Increase damage when using two handed weapons ",
          "Ignore Enemy's Defense ",
        ],
      ],
    },
  },
  {
    name: "Hyon",
    Hyon: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { defense: 25, name: "defense", multiplier: 0 },
        { doubleDamageRate: 10, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { skillDamage: 20, name: "skillDamage", multiplier: 0 },
        { criticalDamageRate: 15, multiplier: 0, name: "criticalDamageRate", rate: "%" },
        { excellentDamageRate: 15, multiplier: 0, name: "excellentDamageRate", rate: "%" },
        { criticalDamage: 20, multiplier: 0, name: "criticalDamage" },
        { excellentDamage: 20, multiplier: 0, name: "excellentDamage" },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 2, 7],
      partsAncient: ["Helm", "Gloves", "Boots", "Weapon 1"],
      optionsInDOM: [
        [
          "Increase Defense ",
          "Double damage Chance ",
          "Increase Skill Damage ",
          "Increase Critical Damage Chance ",
          "Increase Excellent Damage Chance ",
          "Increase Critical Damage ",
          "Increase Excellent Damage ",
        ],
      ],
    },
  },
  {
    name: "Vicious",
    Vicious: {
      optionsBasic: [
        { update: true, defense: 3, damageAbsorb: 0, DamageIncreaseRate: [0], level: 0 },
        { Luck: true },
        {
          typeDefense: { typeFive: "Additional Defense" },
          /*         typeMagic: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg" },
        typeCurse: { typeOne: "HP recovery", typeTwo: "Additional Wizardry Dmg", typeFour: "Additional Curse Spell" },
        typePhysical: { typeOne: "HP recovery", typeThree: "Additional Dmg" }, */
        },
      ],
      optionsAdvanced: [
        { skillDamage: 15, name: "skillDamage", multiplier: 0 },
        { damage: 15, name: "damage", multiplier: 0 },
        { doubleDamageRate: 10, multiplier: 0, name: "doubleDamageRate", rate: "%" },
        { minDmg: 20, name: "minDmg", multiplier: 0 },
        { maxDmg: 30, name: "maxDmg", multiplier: 0 },
        { defenseIgnoreRate: 5, multiplier: 0, name: "defenseIgnoreRate", rate: "%" },
      ],
      effectAncient: [0, 1, 2],
      partsEffect: [2, 3, 4],
      optionsActivated: [0, 1, 2, 6],
      partsAncient: ["Helm", "Armor", "Pants", "Ring"],
      optionsInDOM: [
        [
          "Increase Skill Damage ",
          "Increase Damage ",
          "Double damage Chance ",
          "Increase Min. Damage ",
          "Increase Max. Damage ",
          "Ignore Enemy's Defense ",
        ],
      ],
    },
  },
];

const ancientOptions = createSlice({
  name: "ancient",
  initialState,
  reducers: {},
});

export default ancientOptions.reducer;
