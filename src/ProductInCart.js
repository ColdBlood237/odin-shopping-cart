function ProductInCart({ id, name, color, price, quantity, cart, setCart }) {
  function clickHandler() {
    setCart(cart.filter((p) => p.name !== name));
  }

  return (
    <div className="product-in-cart">
      <h5 className="product-name">{name}</h5>
      <div className={color}></div>
      <p className="product-price">${price}</p>
      <p className="product-quantity">{quantity}</p>
      <button type="button" onClick={clickHandler}>
        Remove Item
      </button>
    </div>
  );
}

export default ProductInCart;
