import { Link } from "react-router-dom";

function CharacterCard ({eachCharacter}) {
   // console.log(eachCharacter.name);
    return (
        <Link to={`/character/${eachCharacter.id}`}>
           <li className="card">
               <img className="card__image"
                  src={eachCharacter.image}
                   alt={`Foto de ${eachCharacter.name}`}
                   title={`Imagen de ${eachCharacter.name}`}/>
                <h3 className="card__name">{eachCharacter.name}</h3>
                 <p className="card__species">{eachCharacter.species}</p> 
                 <p className="card__house">{eachCharacter.house}</p>
                
            
            </li>
          </Link>
    );

}
export default CharacterCard;