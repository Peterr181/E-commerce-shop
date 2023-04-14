import React, { useState } from "react";
import axios from "axios"; // <-- Add this line
import "./BestSellersCategory.scss";

const categories = [
  { name: "All", url: "https://fakestoreapi.com/products" },
  {
    name: "Electronic",
    url: "https://fakestoreapi.com/products/category/electronics",
  },
  { name: "Clothing", url: "https://fakestoreapi.com/products" },
  {
    name: "Jewellery",
    url: "https://fakestoreapi.com/products/category/jewelery",
  },
];

const BestSellersCategory = ({ setBestSellers }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const fetchCategoryData = (categoryName, url) => () => {
    setActiveCategory(categoryName);
    axios.get(url).then((response) => {
      if (categoryName === "Clothing") {
        const menAndWomenBestSellers = response.data.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setBestSellers(menAndWomenBestSellers);
      } else {
        setBestSellers(response.data);
      }
    });
  };

  return (
    <div className="bestsellerscategory__container">
      <div className="bestsellerscategory__container__item">
        {categories.map(({ name, url }) => (
          <span
            key={name}
            className={activeCategory === name ? "activecategory" : ""}
            onClick={fetchCategoryData(name, url)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BestSellersCategory;
