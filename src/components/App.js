import "../styles/App.scss";
import getDataApi from "../services/apiFetch";
import { useEffect, useState } from "react";
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
//import PropTypes from 'prop-types';
import RenderList from "./RenderList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import NotFound from './NotFound';



const App = () => {
  // states
  const [charactersList, setCharacterList] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('Gryffindor');
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //getDataApi
  useEffect(() => {
    setIsLoading(true);
    getDataApi(house).then((data) => {
      setIsLoading(false);
      setCharacterList(data);
    });
  }, [house]);

  // handlerFunctions
  const liftingSearch = (value) => {
    setSearch(value);
  }
  const liftingSelect = (value) => {
    setHouse(value);
  }
  const liftingGender = (value) => {
    setGender(value);
  }
  const handleReset = (ev) => {
    ev.preventDefault();
    setHouse('gryffindor')
    setGender("");
    setSearch('');

  }


  // renderFunctions
  const filteredList = charactersList
    .filter((eachChar) => {
      return search === null ? true : eachChar.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((eachChar) => {
      return gender === ''
        ? true
        : eachChar.gender === gender;
    })

  // character detail
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:id", pathname);

  const getFoundChar = () => {
    if (dataUrl) {
      const charId = dataUrl.params.id;
      const foundChar = filteredList.find((char) => char.id === charId);
      if (foundChar) {
        return foundChar
      } else {
        return {};
      }
    }
  }


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
                  liftingGender={liftingGender}
                  gender={gender}
                />
                <button onClick={handleReset}>reset</button>
                <RenderList
                  charactersList={filteredList}
                  isLoading={isLoading} />
              </>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={<CharacterDetail
              foundChar={getFoundChar()}
            />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

// PROPTYPES
/*App.propTypes = {
  liftingSearch: PropTypes.func.isRequired,
  liftingSelect: PropTypes.func.isRequired,
  charactersList: PropTypes.array.isRequired
}*/

export default App;
