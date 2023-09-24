import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optionsInDOM: ["Luck(success rate Jewel of Soul +25%)", "Luck(critical damage rate +5%)"],
  type: ["wings", "Helm", "Armor", "Gloves", "Pants", "Boots", "Shield", "Weapon"],
};
const luck = createSlice({
  name: "luck",
  initialState,
  reducers: {},
});

export default luck.reducer;
