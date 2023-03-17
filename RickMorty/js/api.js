const getCharacters = async () => {
  let response = await fetch(`https://rickandmortyapi.com/api/character`);

  let data = await response.json();
  return data;
};

const getCharacter = async (id) => {
  let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  let data = await response.json();
  return data;
};

export { getCharacter, getCharacters };
