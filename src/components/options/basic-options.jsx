import React from "react";
import Update from "./update";
import Luck from "./luck";
import Life from "./life";

export default function BasicOptions({ resetOptions, item, setItem, optionsWings }) {
  return (
    <>
      <Luck item={item} setItem={setItem} />
      <Life item={item} setItem={setItem} />
      {optionsWings?.optionsBasic.map((value, index) => {
        return (
          <div className="text-white col-span-2" key={index}>
            <Update item={item} setItem={setItem} value={value} resetOptions={resetOptions} />
          </div>
        );
      })}
    </>
  );
}
