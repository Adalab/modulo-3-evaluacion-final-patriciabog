function FilterCharacter ({FilterCharacter, handleFilterCharacter,}) {
 
   const handleInput = (ev) => {
    handleFilterCharacter(ev.target.value);
   }
  
    return (
        <section>
          <label htmlFor="name">Busca por personaje:</label>
             <input 
               type="text"
               name="name"
               id="name" 
               placeholder="Introduce el nombre del personaje"
               onChange={handleInput}
               value={FilterCharacter}

            />
        </section>
    )
    
};
export default FilterCharacter;