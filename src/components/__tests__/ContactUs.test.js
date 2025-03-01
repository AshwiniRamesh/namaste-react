import { render, screen } from "@testing-library/react";
import Contact from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs", () => {
  test("should load contact us component", () => {
    render(<Contact />); // render to JSDOM
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact us component", () => {
    render(<Contact />); // render to JSDOM

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input feild inside contact us component", () => {
    render(<Contact />); // render to JSDOM

    const name = screen.getByPlaceholderText("name");

    // Assertion
    expect(name).toBeInTheDocument();
  });
  test("should get element by text contact us component", () => {
    render(<Contact />); // render to JSDOM

    const Submit = screen.getByText("Submit");

    // Assertion
    expect(Submit).toBeInTheDocument();
  });
  test("should load 2 input boxes on the ContactUs component", () => {
    render(<Contact />); // render to JSDOM
    //If there are multiple input elemnt (or any element for that matter) and we try to do getBy and not getAllBy then it throws an error
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
