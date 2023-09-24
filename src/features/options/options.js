import { combineReducers } from "@reduxjs/toolkit";
import excellentOptions from "./excellentOptions";
import wingsOption from "./wingsOption";
import ancientOption from "./ancientOption";
import luck from "./luck";
import life from "./life";

const options = combineReducers({
  excellentOptions,
  wingsOption,
  ancientOption,
  luck,
  life,
});

export default options;
