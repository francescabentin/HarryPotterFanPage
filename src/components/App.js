import "../styles/App.scss";
import getDataApi from "../services/apiFetch";
import { useEffect, useState } from "react";
import RenderList from "./RenderList";
import Filters from "./Filters";


const App = () => {

  const [charactersList, setCharacterList] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('Gryffindor');


  useEffect(() => {
    getDataApi(house).then((data) => {
      setCharacterList(data);
    });
  }, [house]);

  const liftingSearch = (value) => {
    setSearch(value);
  }

  const liftingSelect = (value) => {
    setHouse(value);
  }

  const filteredList = charactersList.filter((eachChar) => {
    return search === null ? true : eachChar.name.includes(search)
  });


  return (
    <div>
      <h1>Harry Potter</h1>
      <Filters liftingSearch={liftingSearch} search={search} liftingSelect={liftingSelect} house={house} />
      <RenderList charactersList={filteredList} />
    </div>
  );
};

export default App;
