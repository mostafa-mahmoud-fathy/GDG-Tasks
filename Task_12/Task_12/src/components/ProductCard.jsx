import { Link } from "react-router-dom";

export default function ProductCard({ product, searchQuery }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-white text-gray-700 text-xs px-2 py-1 rounded shadow">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-blue-800 font-bold text-lg">${product.price}</span>
          <Link
            to={`/products/${product.id}`}
            className="px-4 py-1.5 border border-blue-800 text-blue-800 rounded-lg text-sm hover:bg-blue-800 hover:text-white transition"
            state={{search : searchQuery}}
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
