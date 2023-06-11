import { useState } from "react";

function Product({ id, name, imgLink, price, cart, setCart }) {
  console.log(cart);

  const [quantity, setQuantity] = useState(1);

  function addToCart(e) {
    e.preventDefault();
    if (!inCart()) {
      setCart(...cart, {
        name,
        imgLink,
        price,
        quantity: quantity,
      });
    } else {
      incrementQuantity();
    }
  }

  function inCart() {
    cart.forEach((product) => {
      if (product.name === name) return true;
    });
    return false;
  }

  function incrementQuantity() {
    cart.forEach((product) => {
      if (product.name === name) {
        product.quantity += quantity;
      }
    });
  }

  function minusClickHandler(e) {
    e.target.value--;
    setQuantity(quantity - 1);
  }

  function plusClickHandler(e) {
    e.target.value++;
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
        <button>Add to cart</button>
        <button onClick={minusClickHandler}>-</button>
        <input
          onChange={onChangeHandler}
          id={id}
          type="number"
          defaultValue="1"
          min="1"
          step="1"
        ></input>
        <button onClick={plusClickHandler}>+</button>
      </form>
    </div>
  );
}

export default Product;
