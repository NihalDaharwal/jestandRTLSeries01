import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["Html", "Css", "Js"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  //getAllByRole
  test("renders  a list of skils", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  //queryByRole
  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
