import React, { useState, useEffect } from "react";
import "./BestSellers.scss";
import axios from "axios";
import BestSellersCategory from "./BestSellersCategory";
import BestSellersItem from "./BestSellersItem";
import Modal from "./Modal";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchBestSellers = (url) => {
      axios.get(url).then((response) => {
        setBestSellers(response.data);
      });
    };
    fetchBestSellers(`https://fakestoreapi.com/products/`);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  console.log(selectedItem);

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
              onItemClick={() => handleItemClick(bestseller)}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <Modal
          closeModal={closeModal}
          id={selectedItem.id}
          title={selectedItem.title}
          price={selectedItem.price}
          image={selectedItem.image}
          desc={selectedItem.description}
          rate={selectedItem.rating.rate}
          count={selectedItem.rating.count}
        ></Modal>
      )}
    </div>
  );
};

export default BestSellers;
