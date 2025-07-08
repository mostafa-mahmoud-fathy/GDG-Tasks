import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav>
      <div>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Home
        </NavLink> |{" "}
        <NavLink 
          to="/search" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Search
        </NavLink>
      </div>
      <div>
        <span>Welcome, {user.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
