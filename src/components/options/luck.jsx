import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Luck({ item, setItem }) {
  const [activeLuck, setActiveLuck] = useState(false);
  const luck = useSelector((state) => state.options.luck);

  const luckActive = luck.type.includes(item?.type);

  const handleCheckbox = () => {
    setActiveLuck(!activeLuck);
    if (item.criticalDamageRate) {
      const { criticalDamageRate, ...rest } = item;
      setItem(rest);
    } else {
      setItem({ ...item, criticalDamageRate: 5 });
    }
  };

  useEffect(() => {
    setActiveLuck(false);
  }, [item?.name]);

  return (
    <>
      {luckActive ? (
        <div>
          <label htmlFor="luck" className="mr-3">
            Add Luck:
          </label>
          <input type="checkbox" checked={activeLuck} onChange={handleCheckbox} name="luck" />
        </div>
      ) : null}
    </>
  );
}
