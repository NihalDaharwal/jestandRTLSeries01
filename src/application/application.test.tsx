import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    /** getByRole option */

    const pageHeading = screen.getByRole("heading", {
      level: 1,
      // name: "Job application form",
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
      // name: "Section 1",
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElements = screen.getByRole("textbox", { name: "Name" }); // when testbox fileld more than one  we use 2nd argument where we use {} inside with feild name and value
    expect(nameElements).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" }); //{} is used in 2nd argument
    expect(bioElement).toBeInTheDocument();

    /** getByRole */
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    /** getByLabelText */
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    /** getByText */
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
  });
});
