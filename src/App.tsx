import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import ProfilePage from "./pages/profile";
import Cart from "./pages/cart";
import Orders from "./pages/order";
import ProductsPage from "./pages/productsPage";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { useEffect } from "react";

function App() {
  const updateCarts = useSelector((state: RootState) => state.cart.items);

  useEffect(()=> {
    localStorage.setItem("cart",JSON.stringify(updateCarts));
  },[updateCarts]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        <Route
          path="/products"
          element={<Navigate  to="/products/sneakers" replace />}
        />
        <Route path="/products/:category" element={<ProductsPage />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Orders />} />
      </Routes>
      <ToastContainer position="top-center"/>
    </>
  );
}

export default App;
