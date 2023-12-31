const rickAndMortyCharacters = async (state) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error(`Network was not ok (${response.status})`);
    }
    const jsonData = await response.json();
    // console.log(jsonData.results);
    state(jsonData.results);
  } catch (error) {
    console.log(error);
  }
};

const singleChar = async (id, state) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (!response.ok) {
      throw new Error(`Network is not ok (${response.status})`);
    }
    const jsonData = await response.json();
    console.log(jsonData);
    state(jsonData);
  } catch (error) {
    console.log(error);
  }
};

const searchChar = async (name, state) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    if (!response.ok) {
      throw new Error(`Network is not ok (${response.status})`);
    }

    const jsonData = await response.json();

    if (jsonData.results != null) {
      const charactersWithMatchingName = jsonData.results.filter(
        (character) => {
          return character.name.toLowerCase().includes(name.toLowerCase());
        }
      );

      state(charactersWithMatchingName);
    } else {
      state(null);
    }
  } catch (error) {
    console.log(error);
  }
};

export {rickAndMortyCharacters, singleChar, searchChar};
