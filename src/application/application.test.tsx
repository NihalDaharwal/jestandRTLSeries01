import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElements = screen.getByRole("textbox");
    expect(nameElements).toBeInTheDocument();
  });
});
