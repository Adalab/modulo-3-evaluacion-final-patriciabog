/* SECCIÓN DE IMPORT */
import { useEffect } from 'react';
import '../styles/App.scss';
import getApiData from '../services/api';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    getApiData().then((Data) => {
      console.log(Data);
 
    });
  }, []); 

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return (
    <div>
      {/* Aquí va el HTML */}

      <header>
        <h1>Harry Potter</h1>
      </header>
      <form>
        <label htmlFor="">Busca por personaje:</label>
        <input 
         type="text"
         name="name"
         id="name" 
        />

        <label htmlFor="">selecciona la casa:</label>
        <select 
          className=""
          typer="search"
          name="house" 
          id="house"
        >
            <option value="Todos">Todos</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
      </form>
      
  
    </div>
  )
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
