import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";

jest.mock("./ProductInCart", () => ({ name, price }) => {
  return (
    <div data-testid="product-in-cart">
      <h5>{name}</h5>
      <p>{price}</p>
    </div>
  );
});

describe("Cart component", () => {
  it("does not render any product when cart is empty", () => {
    const cart = [];
    render(
      <BrowserRouter>
        <Cart cart={cart} />
      </BrowserRouter>
    );

    expect(screen.queryAllByTestId("product-in-cart").length).toBe(0);
  });

  it("renders products when present in cart", () => {
    const cart = [
      { name: "black", price: "15", quantity: 3, id: 1 },
      { name: "white", price: "14", quantity: 1, id: 2 },
      { name: "yellow", price: "17", quantity: 2, id: 3 },
    ];
    render(
      <BrowserRouter>
        <Cart cart={cart} />
      </BrowserRouter>
    );
    expect(screen.queryAllByTestId("product-in-cart").length).toBe(3);
  });

  it("renders the correct total", () => {
    const cart = [
      { name: "black", price: "15", quantity: 3, id: 1 },
      { name: "white", price: "14", quantity: 1, id: 2 },
      { name: "yellow", price: "17", quantity: 2, id: 3 },
    ];
    render(
      <BrowserRouter>
        <Cart cart={cart} />
      </BrowserRouter>
    );
    expect(screen.getByText("Total: $93")).toBeInTheDocument();
  });

  it("renders the heading Cart", () => {
    const cart = [];
    render(
      <BrowserRouter>
        <Cart cart={cart} />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
  });
});
