import "./programatori.css";
import { useState } from "react";
import data from "../data";
import PridatProgramatora from "./pridatProgramatora";

const Programatori = () => {
  const [listOfDevs, setListOfDevs] = useState(data);

  const addDev = () => {
    const newName = document.getElementById("newName").value;
    const newLastName = document.getElementById("newLastName").value;
    const newLevel = document.getElementById("newLevel").value;
    const newId = listOfDevs.length + 1;
    let newDev = {
      id: newId,
      name: newName,
      lastName: newLastName,
      level: newLevel,
      isChecked: false,
    };
    setListOfDevs(listOfDevs.push(newDev));
  };

  return (
    <div>
      <div>
        {/* Výpis seznamu programátorů - začátek */}
        {listOfDevs.map((oneDev) => {
          const { id, name, lastName, level, isChecked } = oneDev;
          return (
            <div key={id}>
              <label>
                <input type="radio" value={oneDev.id}></input>
                {oneDev.lastName}, {oneDev.name} - {oneDev.level}
              </label>
            </div>
          );
        })}
        {/* Výpis seznamu programátorů - konec */}
      </div>

      <div>
        {/* Přidání nového programátora - začátek */}
        <PridatProgramatora pridat={addDev}></PridatProgramatora>
        {/* Přidání nového programátora - konec */}
      </div>
    </div>
  );
};

export default Programatori;
