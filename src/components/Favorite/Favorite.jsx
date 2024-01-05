import { CharacterCard } from "../CharacterCard/CharacterCard";
import "./Favorite.css";

export const Favorite = ({ character }) => {
  return (
    <div className="favorite-character">
      <h2>Favorite</h2>
      <CharacterCard character={character} />
    </div>
  );
};
