import Product from "./Product";
import uniqid from "uniqid";

function Shop({ cart, setCart }) {
  const products = [
    {
      id: "p-" + { uniqid },
      name: "Blue Square",
      price: "20.49",
    },
  ];

  return (
    <>
      <h1>Squares for sell</h1>
      <Product
        id={"p-" + uniqid()}
        name="Blue Square"
        imgLink=""
        price="20.49"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Orange Square"
        imgLink=""
        price="16.99"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Green Square"
        imgLink=""
        price="9.99"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Red Square"
        imgLink=""
        price="50.01"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Purple Square"
        imgLink=""
        price="32.17"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Brown Square"
        imgLink=""
        price="27.51"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Yellow Square"
        imgLink=""
        price="3.15"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Pink Square"
        imgLink=""
        price="41.25"
        cart={cart}
        setCart={setCart}
      />
      <Product
        id={"p-" + uniqid()}
        name="Gold Square"
        imgLink=""
        price="420.69"
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default Shop;
