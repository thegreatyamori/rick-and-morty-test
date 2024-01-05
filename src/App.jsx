import { useState, useEffect, useCallback } from "react";
import { Favorite } from "./components/Favorite/Favorite";
import { Characters } from "./components/Characters/Characters";
import "./App.css";

const charactersURL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [favCharacter, setFavCharacter] = useState({});

  const getCharacter = (character) => {
    setFavCharacter(character);
  };
  const getCharacters = useCallback(async (page = 1) => {
    const completeCharactersURL =
      page === 1 ? charactersURL : `${charactersURL}?page=${page}`;
    const result = await fetch(completeCharactersURL);
    const response = await result.json();
    setCharacters((prevCharacters) => {
      const mergedCharacters = [...prevCharacters, ...response.results];
      const uniqueArray = mergedCharacters.filter((value, index) => {
        return (
          index ===
          mergedCharacters.findIndex((obj) => {
            return obj.id === value.id;
          })
        );
      });
      return uniqueArray;
    });
  }, []);

  useEffect(() => {
    getCharacters();
    getCharacters(2);
    getCharacters(3);
    return () => {};
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1>Rick and Morty!</h1>
          <Favorite character={favCharacter} />
        </div>
        <Characters characters={characters} getCharacter={getCharacter} />
      </div>
    </>
  );
}

export default App;
