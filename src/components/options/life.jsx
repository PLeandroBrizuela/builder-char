import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Life({ item, setItem }) {
  const life = useSelector((state) => state.options.life);
  const lifeActive = life.type.includes(item?.type);

  const [selectValue, setSelectValue] = useState("");
  const [lifeOption, setLifeOption] = useState({
    hp: false,
    wiz: false,
    dmg: false,
    curse: false,
    defense: false,
  });

  const addLifeOption = (e) => {
    const { value } = e.target;
    const { hp, wiz, curse, dmg, defense } = lifeOption;
    const { optionLifeWiz, optionLifeCurse, optionLifeDmg, lifeRecoveryRate, optionLifeDefense, ...rest } = item;

    if (hp) setItem({ ...rest, lifeRecoveryRate: value });
    if (wiz) setItem({ ...rest, optionLifeWiz: value });
    if (curse) setItem({ ...rest, optionLifeCurse: value });
    if (dmg) setItem({ ...rest, optionLifeDmg: value });
    if (defense) setItem({ ...rest, optionLifeDefense: value });

    setSelectValue(value);
  };

  const handleLifeOption = (e) => {
    const { value } = e.target;

    const options = { hp: false, wiz: false, dmg: false, curse: false, defense: false };

    if (value === "hp") options.hp = true;
    if (value === "wiz") options.wiz = true;
    if (value === "dmg") options.dmg = true;
    if (value === "curse") options.curse = true;
    if (value === "defense") options.defense = true;

    setSelectValue("");
    setLifeOption(options);
    const { lifeRecoveryRate, optionLifeWiz, optionLifeCurse, optionLifeDmg, optionLifeDefense, ...rest } = item;
    setItem(rest);
  };

  useEffect(() => {
    setSelectValue("");
    setLifeOption({
      wiz: false,
      curse: false,
      dmg: false,
      hp: false,
      defense: false,
    });
  }, [item?.name]);

  return (
    <>
      {lifeActive ? (
        <>
          <div>
            <label htmlFor="life">Add Life: </label>
            <select name="life" value={selectValue} onChange={(e) => addLifeOption(e)} className="text-black w-20">
              <option>Select</option>
              {Object.entries(lifeOption).map(([key, value]) => {
                if (value) {
                  return (
                    <>
                      <option value={lifeOption.hp ? "1" : "4"}>{lifeOption.hp ? "+1%" : "+4"}</option>
                      <option value={lifeOption.hp ? "2" : "8"}>{lifeOption.hp ? "+2%" : "+8"}</option>
                      <option value={lifeOption.hp ? "3" : "12"}>{lifeOption.hp ? "+3%" : "+12"}</option>
                      <option value={lifeOption.hp ? "4" : "16"}>{lifeOption.hp ? "+4%" : "+16"}</option>
                    </>
                  );
                }
              })}
            </select>
            <div className="flex flex-col mt-2">
              {Object.entries(life.typeOptions).map(([key, value], index) => {
                const option = item.typeLife.includes(key);
                if (option) {
                  return (
                    <div>
                      <label htmlFor={value} className="mr-2">
                        {life.optionsInDOM[index]}
                      </label>
                      <input
                        type="checkbox"
                        checked={lifeOption[value]}
                        onChange={(e) => handleLifeOption(e)}
                        name={value}
                        value={value}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
