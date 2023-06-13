import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "./Shop";

jest.mock("./Product", () => ({ name, quantity }) => {
  return (
    <>
      <h5 data-testid="product-name">{name}</h5>
    </>
  );
});

describe("Shop component", () => {
  it("renders the content of the shop component", () => {
    render(<Shop />);
    expect(
      screen.getByRole("heading", { name: "Squares for sell" })
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("product-name").length).toBe(9);
  });
});
