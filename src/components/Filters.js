import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";


function Filters({handleFilterHouse, handleFilterCharacter}) {
    
  return (
    <section className="filter">
         <form>
           <FilterCharacter 
           handleFilterCharacter={handleFilterCharacter} />
           <FilterHouse handleFilterHouse={handleFilterHouse}/>
         </form>
    
    </section>
  );
}
export default Filters;