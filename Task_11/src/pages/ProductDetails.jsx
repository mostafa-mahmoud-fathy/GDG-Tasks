import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return product ? (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
