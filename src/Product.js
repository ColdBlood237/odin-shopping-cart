function Product({ name, imgLink, price }) {
  return (
    <div className="product-card">
      <h5 className="product-name">{name}</h5>
      <img className="product-img" src={imgLink} alt={name}></img>
      <p className="product-price">{price}</p>
      <form>
        <button>Add to cart</button>
        <input type="number" value="1" min="1" step="1"></input>
      </form>
    </div>
  );
}

export default Product;
