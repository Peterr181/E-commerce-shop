import React from "react";
import { useDispatch } from "react-redux";
import "./BestSellers.scss";
import test from "../../utils/iteminfo1.jpg";
import { cartActions } from "../../store/cart-slice";
const BestSellersItem = (props) => {
  const { title, price, id, image, onItemClick } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <div className="bestsellers__item__wrapper">
      <div
        className="bestsellers__container__products__item "
        onClick={onItemClick}
      >
        <div className="bestsellers__container__products__item__image">
          <img src={image} alt="product image" className="product__image" />
        </div>
        <div className="bestsellers__container__products__item__text">
          <h3>{title.substring(0, 20)}</h3>
          <span>${price}</span>
        </div>
      </div>
      <button class="add-to-cart" onClick={addToCartHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default BestSellersItem;
