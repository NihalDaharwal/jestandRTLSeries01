//Greet should render the test hello and if name is passed in to the component
//it should render followed by the name

import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/greet";

test("greet rendered correctly", () => {
  render(<Greet />);
  //   const textElement = screen.getByText("Hello");
  const textElement = screen.getByText(/Hello/);
  //   const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("greet render with a name", () => {
  render(<Greet name="Nihal" />);
  const textElement = screen.getByText("Hello Nihal");
  expect(textElement).toBeInTheDocument();
});

// test.only("greet render with a name", () => {
//   render(<Greet name="Nihal" />);
//   const textElement = screen.getByText("Hello Nihal");
//   expect(textElement).toBeInTheDocument();
// });

// test.skip("greet render with a name", () => {
//   render(<Greet name="Nihal" />);
//   const textElement = screen.getByText("Hello Nihal");
//   expect(textElement).toBeInTheDocument();
// });

//group test
describe("Greet", () => {
  test("rendered correctly", () => {
    render(<Greet />);
    //   const textElement = screen.getByText("Hello");
    const textElement = screen.getByText(/Hello/);
    //   const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("render with a name", () => {
    render(<Greet name="Nihal" />);
    const textElement = screen.getByText("Hello Nihal");
    expect(textElement).toBeInTheDocument();
  });
});

// nested describe
describe("Greet1", () => {
  test("rendered correctly", () => {
    render(<Greet />);
    //   const textElement = screen.getByText("Hello");
    const textElement = screen.getByText(/Hello/);
    //   const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("nested describe", () => {
    test("render with a name", () => {
      render(<Greet name="Nihal" />);
      const textElement = screen.getByText("Hello Nihal");
      expect(textElement).toBeInTheDocument();
    });
  });
});
