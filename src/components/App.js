/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import '../styles/App.scss';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Error from './Error';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [listData, setListData] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  
   

  /* EFECTOS (código cuando carga la página) */
    useEffect(() => {
    getDataApi(houseFilter).then((cleanData) => {
    //  console.log(cleanData);
      setListData(cleanData);
 
    });
  }, [houseFilter]); 

  /* FUNCIONES HANDLER */
 const handleFilterHouse = (value) => {
     setHouseFilter(value)
  };

  const handleFilterCharacter = (value) => {
    setCharacterFilter(value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
 const characterFiltered = listData
    .filter((eachCharacter) => eachCharacter.name.toLocaleLowerCase().includes(characterFilter.toLocaleLowerCase())) 
    .filter((eachCharacter) => eachCharacter.house.includes(houseFilter))

   const { pathname } = useLocation()
   const dataUrl = matchPath('/character/:id', pathname);
   const characterId = dataUrl !== null ? dataUrl.params.id : null;
   const characterFind = listData.find((eachCharacter) => eachCharacter.id === characterId);
   console.log(characterFind);

   

  /* HTML */
  return (
    <div className='box'>
      <header className='header'>
        <h1 className='header__title'>Harry Potter</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
               <Filters 
                  houseFilter={houseFilter}
                  handleFilterHouse={handleFilterHouse} 
                  characterFilter={characterFilter}
                  handleFilterCharacter={handleFilterCharacter}
               />
               <CharacterList listData ={characterFiltered}/>
              </>
              }
            ></Route>

            <Route 
              path='/character/:id' 
              element={
                <CharacterDetail 
                characterFind={characterFind} />}
            />
             <Route path="*" element={<Error />}></Route>

        </Routes>
         
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
