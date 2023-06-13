import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  it("renders the navbar", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders the home page", () => {
    render(<App />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
});
