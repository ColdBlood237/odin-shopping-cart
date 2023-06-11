import { useState } from "react";

function Product({ id, name, price, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);

  function addToCart(e) {
    e.preventDefault();
    if (!inCart()) {
      setCart([
        ...cart,
        {
          id,
          name,
          price,
          quantity: quantity,
        },
      ]);
    } else {
      incrementQuantity();
    }
  }

  function inCart() {
    let inCart = false;
    cart.forEach((product) => {
      console.log(product.name, name);
      if (product.name === name) inCart = true;
    });
    return inCart;
  }

  function incrementQuantity() {
    cart.forEach((product) => {
      if (product.name === name) {
        product.quantity += quantity;
      }
    });
  }

  function minusClickHandler() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function plusClickHandler() {
    setQuantity(quantity + 1);
  }

  function onChangeHandler(e) {
    setQuantity(e.target.value);
  }
  return (
    <div className="product-card">
      <h5 className="product-name">{name}</h5>
      <div className="product-img-placeholder"></div>
      <p className="product-price">${price}</p>
      <form onSubmit={addToCart}>
        <button type="submit">Add to cart</button>
        <button type="button" onClick={minusClickHandler}>
          -
        </button>
        <input
          onChange={onChangeHandler}
          id={id}
          type="number"
          value={quantity}
          min="1"
          step="1"
        ></input>
        <button type="button" onClick={plusClickHandler}>
          +
        </button>
      </form>
    </div>
  );
}

export default Product;
