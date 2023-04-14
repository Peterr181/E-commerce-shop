import React from "react";
import "./ItemsInfo.scss";
import itemimage1 from "../../utils/iteminfo1.jpg";
import itemimage2 from "../../utils/iteminfo2.jpg";
import itemimage3 from "../../utils/iteminfo3.jpg";

const ItemsInfo = () => {
  return (
    <div className="iteminfo__wrapper">
      <div className="itemsinfo__container">
        <div className="itemsinfo__container__item">
          <div className="itemsinfo__container__item__details">
            <div className="itemsinfo__container__item__details__image">
              <img
                src={itemimage1}
                alt="electronic devices"
                className="iteminfo__img"
              />
            </div>
            <div className="itemsinfo__container__item__details__text">
              <h2>ELECTRONIC DEVICES</h2>
              <p>Many high tech electronic devices that you will love!</p>
              <button className="shopnow__button centerfix">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="itemsinfo__container__item">
          <div className="itemsinfo__container__item__details">
            <div className="itemsinfo__container__item__details__image">
              <img
                src={itemimage2}
                alt="electronic devices"
                className="iteminfo__img"
              />
            </div>
            <div className="itemsinfo__container__item__details__text">
              <h2>CLOTHES FROM DESIGNERS</h2>
              <p>Buy jewellery from the best designers in the world!</p>
              <button className="shopnow__button centerfix">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div className="itemsinfo__container__item">
          <div className="itemsinfo__container__item__details">
            <div className="itemsinfo__container__item__details__image">
              <img
                src={itemimage3}
                alt="electronic devices"
                className="iteminfo__img"
              />
            </div>
            <div className="itemsinfo__container__item__details__text">
              <h2>BEAUTIFUL JEWELLERY</h2>
              <p>Buy jewellery from the best designers in the world!</p>
              <button className="shopnow__button centerfix">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsInfo;
