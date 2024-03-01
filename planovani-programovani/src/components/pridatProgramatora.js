import "./pridatProgramatora.css";
import { useState } from "react";

const PridatProgramatora = (props) => {
  return (
    <div>
      <h2>Přidání nového programátora:</h2>
      <form>
        <label>Jméno:</label>
        <input type="text" placeholder="Jméno programátora" id="newName" />
        <label>Příjmení:</label>
        <input
          type="text"
          placeholder="Příjmení programátora"
          id="newLastName"
        />
        <label>Úroveň:</label>
        <input type="text" placeholder="Úroveň programátora" id="newLevel" />
      </form>
      <button onClick={props.pridat}>Přidat</button>
    </div>
  );
};

export default PridatProgramatora;
