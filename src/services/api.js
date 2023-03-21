const getApiData = () => {
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((eachCharacter) => {
        return {
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          gender: eachCharacter.gender,
        };
      });
      return cleanData;
    });
};
export default getApiData;