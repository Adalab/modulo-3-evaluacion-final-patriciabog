function FilterHouse ({handleFilterHouse, houseFilter}) {
    const handleChange = (ev) => {
        handleFilterHouse(ev.target.value);
    }
    return (
        <section>
            <label htmlFor="">Selecciona la casa:</label>
             <select 
              className=""
              typer="search"
              name="house" 
              id={houseFilter}
              onChange={handleChange}
             >
            <option value="Todos">Todos</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </section>
    )
}
export default FilterHouse;