function CharacterCard ({eachCharacter}) {
   // console.log(eachCharacter.name);
    return (
        
        <li className="">
            <a href=".">
             <img className=""
             src={eachCharacter.image}
             alt={`Foto de ${eachCharacter.name}`} 
             title={`Foto de ${eachCharacter.name}`}/>
            <h4 className="">{eachCharacter.name}</h4>
             <p className="">{eachCharacter.species} / {eachCharacter.house}
             </p> 
             </a>    
        </li>
    )

}
export default CharacterCard;