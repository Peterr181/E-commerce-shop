import React from "react";
import { useDispatch } from "react-redux";
import "./BestSellers.scss";
import test from "../../utils/iteminfo1.jpg";
import { cartActions } from "../../store/cart-slice";
const BestSellersItem = (props) => {
  const { title, price, id, image } = props;
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
    <div className="bestsellers__container__products__item">
      <div className="bestsellers__container__products__item__image">
        <img src={image} alt="product image" className="product__image" />
      </div>
      <div className="bestsellers__container__products__item__text">
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
      <button class="add-to-cart" onClick={addToCartHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default BestSellersItem;
