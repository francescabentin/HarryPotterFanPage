import "../styles/App.scss";
import getDataApi from "../services/apiFetch";
import { useEffect, useState } from "react";
import RenderList from "./RenderList";



const App = () => {

  const [charactersList, setCharacterList] = useState([]);


  useEffect(() => {
    getDataApi().then((data) => {
      setCharacterList(data);
    });
  }, []);



  return (
    <div>
      <h1>Harry Potter</h1>
      <form>
        <label>Buscar por personaje:</label> <input />
        <label>Seleccionar la casa:</label>
        <select>
          <option>Grifindor</option>
          <option>Hufflepuff</option>
          <option>Slytherin</option>
        </select>
      </form>

      <RenderList charactersList={charactersList} />

    </div>
  );
};

export default App;
