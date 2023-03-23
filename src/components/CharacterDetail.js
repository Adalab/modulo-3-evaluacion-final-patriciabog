import { Link } from "react-router-dom";

function CharacterDetail ({characterFind}) {
  return (
    <div className="card-selected">
         <Link className="link"  to="/"> 👈🏻Back</Link>
       
         <img className="card-selected__image"
             src={characterFind.image}
             alt={`${characterFind.name}`} 
             title= {`Image of ${characterFind.name}`}/>
         <section className="selected">     
           <h3 className="selected__name">{`Name: ${characterFind.name}`}</h3>
           <p className="selected__species">{`Specie: ${characterFind.species}`}</p> 
           <p className="selected__house">{`House: ${characterFind.house}`}</p>
           <p className="selected__ancestry">{`Ancestry: ${characterFind.ancestry}`}</p>
           <p className="selected__actor">{`Actor: ${characterFind.actor}`}</p>
           <p className="selected__alive">{`Alive: ${characterFind.alive}`}</p>
           </section>
       
    </div>
  );

}
export default CharacterDetail;