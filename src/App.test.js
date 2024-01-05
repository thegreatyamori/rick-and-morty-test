import { render, screen, waitFor } from "@testing-library/react";
import App from "./App.jsx";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        value: [],
      }),
  })
);

describe("App tests", () => {
  test("should contains the heading 1", () => {
    waitFor(() => {
      render(<App />);
    });
    const heading = screen.getByText("Rick and Morty!");
    expect(heading).toBeInTheDocument();
  });
});
