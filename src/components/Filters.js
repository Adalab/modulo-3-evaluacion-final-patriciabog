import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";


function Filters({handleFilterHouse, handleFilterCharacter, characterFilter, houseFilter}) {
   
  return (
    <section className="filter">
         <form className="filter__form" >
           <FilterCharacter 
           handleFilterCharacter={handleFilterCharacter}
           characterFilter={characterFilter} />
           <FilterHouse 
           handleFilterHouse={handleFilterHouse}
          houseFilter={houseFilter}
           />
         </form>
    
    </section>
  );
}
export default Filters;