import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {product.title}
                </Link>
              </td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
