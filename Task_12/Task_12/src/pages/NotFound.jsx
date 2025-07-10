import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-800">404</h1>
      <p className="text-xl md:text-2xl text-gray-700 mt-4 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-800 text-white rounded-lg text-sm font-medium hover:bg-blue-900"
      >
        Go Home
      </Link>
    </div>
  );
}
