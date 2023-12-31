export default function specializationAgility(character, setSpecialization) {
  let specialization;
  if (character.agility <= 1500) specialization = character.agility / 15000;
  if (character.agility > 1500 && character.agility <= 2000) specialization = 0.1 + (character.agility - 1500) / 2500;
  if (character.agility > 2000 && character.agility <= 3000) specialization = 0.3 + (character.agility - 2000) / 6666;
  if (character.agility > 3000) specialization = 0.45;

  switch (character.class[0]) {
    case "Dark Wizard":
      setSpecialization({
        /* splAtkRate */
        splDefRate: Math.floor(
          (character.level * 5 + character.agility * 1.5 + character.strength / 4) * specialization
        ),
        splPVPAtkRate: Math.floor((character.level * 3 + character.agility * 4) * specialization),
      });
      break;
    case "Fairy Elf":
      setSpecialization({
        splAtkMin: Math.floor((character.strength / 14 + Math.floor(character.agility / 7)) * specialization),
        splAtkMax: Math.floor((character.strength / 8 + Math.floor(character.agility / 4)) * specialization),
        splDefRate: Math.floor(character.agility / 4 * specialization),
        splPVPDefRate: Math.floor((character.level * 2 + character.agility / 10) * specialization),
      });
      break;
  }
}
