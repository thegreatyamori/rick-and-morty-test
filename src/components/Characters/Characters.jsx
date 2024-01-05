import { CharacterCard } from "../CharacterCard/CharacterCard";
import "./Characters.css";

export const Characters = ({ characters, getCharacter }) => {
  const mapCharacters = characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        getCharacter={getCharacter}
      />
    );
  });
  return <section className="characters">{mapCharacters}</section>;
};
