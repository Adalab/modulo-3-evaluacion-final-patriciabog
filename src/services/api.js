const getDataApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        return {
          image: eachCharacter.image || `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
          ancestry: eachCharacter.ancestry,
          actor: eachCharacter.actor,
          alive: eachCharacter.alive,
          id: eachCharacter.id,
        };
      });
      return cleanData;
    });
};
export default getDataApi;