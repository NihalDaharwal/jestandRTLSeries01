import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });
});
