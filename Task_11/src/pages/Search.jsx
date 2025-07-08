import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => setResults(data.products));
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchParams({ search: e.target.value })
        }
        placeholder="Search products..."
      />
      {results.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
