import "./App.css";
import Programatori from "./components/programatori";

const App = () => {
  return (
    <div>
      <fieldset>
        <legend>
          <h1>Seznam programátorů:</h1>
        </legend>
        <Programatori></Programatori>
      </fieldset>
    </div>
  );
};

export default App;
