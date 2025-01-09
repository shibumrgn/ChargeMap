import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import "@testing-library/jest-dom"; // Ensure this import is present

describe("NavBar", () => {
  it("renders correctly", () => {
    const { getByText, getByRole } = render(<NavBar />);

    expect(getByText("Charger Map")).toBeInTheDocument();
    expect(getByRole("button", { name: /privacy/i })).toBeInTheDocument();
  });

  it("renders the MapPinIcon correctly", () => {
    const { container } = render(<NavBar />);
    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("size-6 text-blue-500");
  });
});
