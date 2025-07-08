import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Route>
    </Routes>
  );
}
