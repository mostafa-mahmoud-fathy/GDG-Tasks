import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowLeft, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const previousSearch = location.state?.search || "";

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <button
        onClick={() => navigate("/" + `?search=${previousSearch}`)}
        className="mb-6 text-blue-700 hover:underline flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Home
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-green-700">${product.price}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
            <p><strong>Min Order:</strong> {product.minimumOrderQuantity}</p>
            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <span className="text-yellow-500 text-lg">
              <FontAwesomeIcon icon={faStar} /> {product.rating}
            </span>
            <span className="text-sm text-gray-500">Stock: {product.stock}</span>
            <span className="text-sm text-green-600">{product.discountPercentage}% off</span>
          </div>

          <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition shadow flex items-center gap-2">
            <FontAwesomeIcon icon={faCartShopping} />
            Add to Cart
          </button>
        </div>
      </div>

      {product.images && product.images.length > 1 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">More Images</h2>
          <div className="flex gap-4 overflow-x-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Image ${idx + 1}`}
                className="h-32 rounded border"
              />
            ))}
          </div>
        </div>
      )}

      {product.reviews?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 border p-4 rounded shadow-sm">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">{review.reviewerName}</span> -{" "}
                  {new Date(review.date).toLocaleDateString()}
                </p>
                <p className="text-yellow-500 mb-1">
                  <FontAwesomeIcon icon={faStar} /> {review.rating}
                </p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}