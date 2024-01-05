import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";

const dummyCharacter = {
  name: "dummyName",
  image: "https://example.com",
  species: "dummySpecies",
  status: "dummyStatus",
};
const mockGetCharacter = jest.fn();

test("should render character information when a character data is passed", () => {
    // Act
    render(<CharacterCard character={dummyCharacter} />);

    // Assert
    expect(screen.getByTestId("character-img")).toBeInTheDocument();
    expect(screen.getByTestId("character-img")).toHaveAttribute(
        "alt",
        dummyCharacter.name,
    );
    expect(screen.getByTestId("character-img")).toHaveAttribute(
        "src",
        dummyCharacter.image
    );
    expect(screen.getByTestId("character-species")).toBeInTheDocument();
    expect(screen.getByTestId("character-species")).toHaveTextContent(
      `Species: ${dummyCharacter.species}`
    );
    expect(screen.getByTestId("character-status")).toBeInTheDocument();
    expect(screen.getByTestId("character-status")).toHaveTextContent(
      dummyCharacter.status
    );
});

test("should call getCharacter when the component receives a click", () => {
    // arrange
    render(
      <CharacterCard
        character={dummyCharacter}
        getCharacter={mockGetCharacter}
      />
    );

    // Act
    fireEvent.click(screen.getByTestId("character-card"));

    // Assert
    expect(mockGetCharacter).toHaveBeenCalledWith(dummyCharacter);
});
