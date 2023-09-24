import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeOptions: {
    typeHp: "hp",
    typeMagic: "wiz",
    typePhysical: "dmg",
    typeCurse: "curse",
    typeDefense: "defense",
  },
  optionsInDOM: [
    "HP recovery",
    "Additional Wizardry Dmg",
    "Additional Dmg",
    "Additional Curse Spell",
    "Additional Defense",
  ],
  type: ["wings", "Helm", "Armor", "Gloves", "Pants", "Boots", "Shield", "Weapon"],
};
const life = createSlice({
  name: "life",
  initialState,
  reducers: {},
});

export default life.reducer;
