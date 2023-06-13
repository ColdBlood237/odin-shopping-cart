import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./Product";
import userEvent from "@testing-library/user-event";

describe("Product component", () => {
  it("add product to cart", () => {
    const setCartMock = jest.fn();

    render(<Product cart={[]} setCart={setCartMock} />);
    const addButton = screen.getByRole("button", { name: "Add to cart" });

    userEvent.click(addButton);

    expect(setCartMock).toHaveBeenCalledTimes(1);
  });
});
