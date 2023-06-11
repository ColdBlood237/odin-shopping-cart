import Product from "./Product";
import uniqid from "uniqid";

function Shop({ cart, setCart }) {
  const products = [
    {
      id: "p-" + uniqid(),
      name: "Blue Square",
      color: "blue",
      price: "20.49",
    },
    {
      id: "p-" + uniqid(),
      name: "Orange Square",
      color: "orange",
      price: "16.99",
    },
    {
      id: "p-" + uniqid(),
      name: "Green Square",
      color: "green",
      price: "9.99",
    },
    {
      id: "p-" + uniqid(),
      name: "Red Square",
      color: "red",
      price: "50.01",
    },
    {
      id: "p-" + uniqid(),
      name: "Purple Square",
      color: "purple",
      price: "32.17",
    },
    {
      id: "p-" + uniqid(),
      name: "Brown Square",
      color: "brown",
      price: "27.51",
    },
    {
      id: "p-" + uniqid(),
      name: "Yellow Square",
      color: "yellow",
      price: "3.15",
    },
    {
      id: "p-" + uniqid(),
      name: "Pink Square",
      color: "pink",
      price: "41.25",
    },
    {
      id: "p-" + uniqid(),
      name: "Gold Square",
      color: "gold",
      price: "420.69",
    },
  ];

  return (
    <>
      <h1>Squares for sell</h1>
      <div className="products-wrapper">
        {products.map((p) => {
          return (
            <Product
              id={p.id}
              key={p.id}
              name={p.name}
              color={p.color}
              price={p.price}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
