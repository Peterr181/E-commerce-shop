import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import InfoNavbar from "./components/Navbar/InfoNavbar";
import ItemsInfo from "./components/ItemsInfo/ItemsInfo";
import BestSellers from "./components/BestSellers/BestSellers";
import DiscountInfo from "./components/DiscountInfo/DiscountInfo";
import Cart from "./components/Cart/Cart";
import CartResume from "./components/Cart/CartResume";
import Footer from "./components/Footer/Footer";
function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <InfoNavbar />
      <Navbar
        setIsCartClicked={setIsCartClicked}
        setIsLogoClicked={setIsLogoClicked}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BestSellers />

              <Footer />
              <Cart
                setIsCartClicked={setIsCartClicked}
                isCartClicked={isCartClicked}
              />
            </>
          }
        />

        <Route path="/cartresume" element={<CartResume />} />
      </Routes>
    </>
  );
}

export default App;
