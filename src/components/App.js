import "../styles/App.scss";
import getDataApi from "../services/apiFetch";
import { useEffect, useState } from "react";
import RenderList from "./RenderList";
import Filters from "./Filters";



const App = () => {

  const [charactersList, setCharacterList] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    getDataApi().then((data) => {
      setCharacterList(data);
    });
  }, []);

  const liftingSearch = (value) => {
    setSearch(value)
  }



  return (
    <div>
      <h1>Harry Potter</h1>
      <Filters liftingSearch={liftingSearch} search={search} />
      <RenderList charactersList={charactersList} />
    </div>
  );
};

export default App;
