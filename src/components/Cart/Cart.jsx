import React from "react";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Cart.scss";
import test1 from "../../utils/iteminfo1.jpg";
import CartItem from "./CartItem";

const Cart = ({ isCartClicked, setIsCartClicked }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotalPrice = useSelector((state) => {
    return state.cart.items.reduce(
      (accumulator, item) => accumulator + item.totalPrice,
      0
    );
  });

  const removeAllItemsHandler = () => {
    dispatch(cartActions.removeAllItemsFromCart());
  };

  console.log(cartItems);

  let cartClasses = "cart__container";

  if (isCartClicked) {
    cartClasses = "cart__container open";
  }

  const hideCartHandler = () => {
    setIsCartClicked(false);
  };

  return (
    <>
      <div className={cartClasses}>
        <div className="cart__container__summary">
          <p>Total Items: {cartItemsQuantity}</p>
          <p>Total Payments: {cartTotalPrice.toFixed(2)}$</p>

          <button className="hide__button" onClick={hideCartHandler}>
            HIDE CART
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty__cart__container">
            <p className="cart__empty">Oops, this cart is empty!</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                image: item.image,
              }}
            />
          ))
        )}
        {cartItems.length > 0 && (
          <button className="shopnow__button" onClick={removeAllItemsHandler}>
            CLEAR
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
