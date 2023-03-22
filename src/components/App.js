import "../styles/App.scss";
import getDataApi from "../services/apiFetch";
import { useEffect, useState } from "react";
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import RenderList from "./RenderList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  // states
  const [charactersList, setCharacterList] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('Gryffindor');

  //getDataApi
  useEffect(() => {
    getDataApi(house).then((data) => {
      setCharacterList(data);
    });
  }, [house]);

  // handleFunctions
  const liftingSearch = (value) => {
    setSearch(value);
  }
  const liftingSelect = (value) => {
    setHouse(value);
  }

  // searchFilter
  const filteredList = charactersList.filter((eachChar) => {
    return search === null ? true : eachChar.name.includes(search)
  });

  // character detail
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:id", pathname);
  const charId = dataUrl !== null ? dataUrl.params.id : null;
  const foundChar = filteredList.find((char) => char.id === charId);

  return (
    <>
      <h1>Harry Potter</h1>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  liftingSearch={liftingSearch}
                  search={search}
                  liftingSelect={liftingSelect}
                  house={house}
                />
                <RenderList charactersList={filteredList} />
              </>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={<CharacterDetail foundChar={foundChar} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
