import React, { useState, useEffect } from "react";
import "./BestSellers.scss";
import axios from "axios";
import BestSellersCategory from "./BestSellersCategory";

import BestSellersItem from "./BestSellersItem";
const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchBestSellers = (url) => {
      axios.get(url).then((response) => {
        setBestSellers(response.data);
      });
    };
    fetchBestSellers(`https://fakestoreapi.com/products/`);
  }, []);

  return (
    <div className="bestsellers__container">
      <div className="bestsellers__container__wrapper">
        <h2>Best Sellers</h2>
        <p>Products that our customers likes the most!</p>
        <BestSellersCategory setBestSellers={setBestSellers} />
        <div className="bestsellers__container__products">
          {bestSellers.map((bestseller) => (
            <BestSellersItem
              key={bestseller.id}
              id={bestseller.id}
              title={bestseller.title}
              price={bestseller.price}
              image={bestseller.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
