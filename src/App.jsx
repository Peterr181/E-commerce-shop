import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import InfoNavbar from "./components/Navbar/InfoNavbar";
import ItemsInfo from "./components/ItemsInfo/ItemsInfo";
import BestSellers from "./components/BestSellers/BestSellers";
import DiscountInfo from "./components/DiscountInfo/DiscountInfo";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  return (
    <>
      <InfoNavbar />
      <Navbar
        setIsCartClicked={setIsCartClicked}
        setIsLogoClicked={setIsLogoClicked}
      />
      <Hero />

      <BestSellers />
      <DiscountInfo />
      <Cart isCartClicked={isCartClicked} setIsCartClicked={setIsCartClicked} />
    </>
  );
}

export default App;
