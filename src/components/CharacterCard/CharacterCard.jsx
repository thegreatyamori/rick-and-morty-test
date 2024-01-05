import "./CharacterCard.css";

export const CharacterCard = ({ character, getCharacter }) => {
  const handleClick = () => {
    getCharacter(character);
  };

  return (
    <div
      className="character-card"
      data-testid="character-card"
      onClick={handleClick}
    >
      <img
        alt={character.name}
        src={character.image}
        data-testid="character-img"
      />
      <div className="character-content">
        <h2>{character.name}</h2>
        <p data-testid="character-species">Species: {character.species}</p>
        <p data-testid="character-status">
          Status: <span className="status-chip">{character.status}</span>
        </p>
      </div>
    </div>
  );
};
