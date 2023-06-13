import { Link } from "react-router-dom";
import ProductInCart from "./ProductInCart";

function Cart({ cart, setCart }) {
  function calculateTotal() {
    return Number(
      cart
        .reduce((total, currentProduct) => {
          return total + currentProduct.price * currentProduct.quantity;
        }, 0.0)
        .toFixed(2)
    );
  }

  return (
    <div data-testid="cart">
      <h1>Cart</h1>
      <div className="products-wrapper">
        {cart.map((p) => {
          return (
            <ProductInCart
              id={p.id}
              key={p.id}
              name={p.name}
              color={p.color}
              price={p.price}
              quantity={p.quantity}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
      <p>Total: ${calculateTotal()}</p>
      <button>
        <Link to="/troll">Buy Squares</Link>
      </button>
    </div>
  );
}

export default Cart;
