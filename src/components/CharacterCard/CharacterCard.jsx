import "./CharacterCard.css";

export const CharacterCard = ({ character, getCharacter }) => {
  const handleClick = () => {
    getCharacter(character);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img alt={character.name} src={character.image} />
      <div className="character-content">
        <h2>{character.name}</h2>
        <p>Species: {character.species}</p>
        <p>
          Status: <span className="status-chip">{character.status}</span>
        </p>
      </div>
    </div>
  );
}
