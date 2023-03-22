/* SECCIÓN DE IMPORT */
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [listData, setListData] = useState([]);
  const [characterFilter, setCharacterFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  
   

  /* EFECTOS (código cuando carga la página) */
    useEffect((houseFilter) => {
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


  /* HTML */
  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
      </header>
       <main>
          <Filters 
          houseFilter={houseFilter}
          handleFilterHouse={handleFilterHouse} 
          characterFilter={characterFilter}
          handleFilterCharacter={handleFilterCharacter}
          />
          <CharacterList listData ={characterFiltered}/>
       </main>
     
  
    </div>
  )
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
