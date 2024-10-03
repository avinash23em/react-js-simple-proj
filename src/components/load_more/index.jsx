import { useState, useEffect } from "react";
import "./style.css";

export default function ImageLoader() {
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disable, setdisable] = useState(false);

  async function fetchproducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setloading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchproducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length == 100) setdisable(true);
  }, [products]);
  if (loading) {
    return <div>loading data pls wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          load more products
        </button>
        {disable ? <p>you have reached 100 products</p> : null}
      </div>
    </div>
  );
}
