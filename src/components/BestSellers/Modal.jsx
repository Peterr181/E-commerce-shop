import React from "react";
import { useDispatch } from "react-redux";
import "./Modal.scss";
import { cartActions } from "../../store/cart-slice";

const Modal = (props) => {
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
  const { id, title, price, image, closeModal, desc, rate, count } = props;
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
        <div className="modal__wrapper">
          <div className="modalimage__container">
            <img src={image} alt={title} className="modal__img" />
          </div>
          <div className="modaltext__container">
            <h2 className="modal__title">{title}</h2>
            <p className="modal__desc">{desc}</p>
            <div className="modal__other">
              <p>Count: {count}</p>
              <p>Rate: {rate}</p>
            </div>
            <p className="modal__price">${price}</p>
            <button className="add-to-cart fixbtn" onClick={addToCartHandler}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
