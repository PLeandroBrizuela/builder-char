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
        { ag: true, agMax: 20, multiplier: 0, name: "agpMax" },
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
];

const ancientOptions = createSlice({
  name: "ancient",
  initialState,
  reducers: {},
});

export default ancientOptions.reducer;
