import React from "react";
import "./DiscountInfo.scss";
import discountimg from "../../utils/discountimg.png";

const DiscountInfo = () => {
  return (
    <div className="discountinfo__container">
      <div className="discountinfo__container__item">
        <div className="discountinfo__container__item__image">
          <img src={discountimg} alt="happy girls" className="discount__img" />
        </div>
        <div className="discountinfo__container__item__text">
          <p className="trends">New season trends!</p>
          <h2>Best Summer Collection</h2>
          <p className="discount__info">Sale Get up to 50% off</p>
          <button className="shopnow__button">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountInfo;
