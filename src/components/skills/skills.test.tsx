import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["Html", "Css", "Js"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders  a list of skils", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });
});