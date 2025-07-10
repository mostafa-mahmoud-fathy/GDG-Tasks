import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
          <p className="text-sm text-center text-gray-600">
            Please enter your information to log in.
          </p>
        </div>

        <input
          onChange={handleUserInput}
          type="text"
          name="username"
          value={user.username}
          placeholder="Account"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={handleUserInput}
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-[#254B86] hover:bg-[#254c86f0] text-white font-semibold py-2 rounded-lg transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}