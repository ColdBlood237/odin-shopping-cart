import Product from "./Product";
import uniqid from "uniqid";

function Shop({ cart, setCart }) {
  const products = [
    {
      id: "p-" + uniqid(),
      name: "Blue Square",
      price: "20.49",
    },
    {
      id: "p-" + uniqid(),
      name: "Orange Square",
      price: "16.99",
    },
    {
      id: "p-" + uniqid(),
      name: "Green Square",
      price: "9.99",
    },
    {
      id: "p-" + uniqid(),
      name: "Red Square",
      price: "50.01",
    },
    {
      id: "p-" + uniqid(),
      name: "Purple Square",
      price: "32.17",
    },
    {
      id: "p-" + uniqid(),
      name: "Brown Square",
      price: "27.51",
    },
    {
      id: "p-" + uniqid(),
      name: "Yellow Square",
      price: "3.15",
    },
    {
      id: "p-" + uniqid(),
      name: "Pink Square",
      price: "41.25",
    },
    {
      id: "p-" + uniqid(),
      name: "Gold Square",
      price: "420.69",
    },
  ];

  console.log(products);

  return (
    <>
      <h1>Squares for sell</h1>
      {products.map((p) => {
        return (
          <Product
            id={p.id}
            key={p.id}
            name={p.name}
            price={p.price}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </>
  );
}

export default Shop;
