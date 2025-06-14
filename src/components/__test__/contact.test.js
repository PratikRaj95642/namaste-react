import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us page test cases", () => {
    test("Should load contact us page", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load submit text inside contact us page", () => {
    render(<Contact/>);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test("Should load all inputboxes inside contact us page", () => {
    render(<Contact/>);

    // querying 
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
});
});
