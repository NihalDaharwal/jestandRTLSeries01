import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

it("greet rendered correctly", () => {
  render(<Greet />);
  //   const textElement = screen.getByText("Hello");
  const textElement = screen.getByText(/Hello/);
  //   const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

it("greet render with a name", () => {
  render(<Greet name="Nihal" />);
  const textElement = screen.getByText("Hello Nihal");
  expect(textElement).toBeInTheDocument();
});

//it.only like test.only
fit("renders with a name", () => {
  render(<Greet name="Nihal" />);
  const textElement = screen.getByText("Hello Nihal");
  expect(textElement).toBeInTheDocument();
});

//it.skip like test.skip
xit("render with a name", () => {
  render(<Greet name="Nihal" />);
  const textElement = screen.getByText("Hello Nihal");
  expect(textElement).toBeInTheDocument();
});
