import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState(searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      const url = searchTerm
        ? `https://dummyjson.com/products/search?q=${searchTerm}`
        : "https://dummyjson.com/products";

      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchData();
  }, [searchTerm]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchParams({ search: input });
  }

  return (
    <div className="px-20 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Featured Products</h1>

      <form
        onSubmit={handleSearch}
        className="mb-10 max-w-2xl mx-auto"
      >
        <div className="flex rounded-full shadow overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-600">
          <input
            type="text"
            placeholder="Search for products..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-5 py-3 text-sm sm:text-base focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} searchQuery={searchTerm} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
