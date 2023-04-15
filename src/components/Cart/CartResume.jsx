import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./CartResume.scss";

const CartResume = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const addToCartHandler = (id, title, price, image) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  const cartTotalPrice = useSelector((state) => {
    return state.cart.items.reduce(
      (accumulator, item) => accumulator + item.totalPrice,
      0
    );
  });

  console.log(cartItems);
  return (
    <>
      <div className="table__wrapper">
        <table className="cart__table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>
                  <img src={cartItem.image} alt={cartItem.name} />
                </td>
                <td>{cartItem.name}</td>
                <td>${cartItem.price.toFixed(2)}</td>
                <td>{cartItem.quantity}</td>
                <td>${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() =>
                      addToCartHandler(
                        cartItem.id,
                        cartItem.title,
                        cartItem.price,
                        cartItem.image
                      )
                    }
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/">
          <div className="backbutton">
            <button className="add-to-cart fixback">CONTINUE SHOPPING</button>
          </div>
        </Link>
      </div>
      <div className="total__container">
        <h2>Total Price</h2>
        <p>${cartTotalPrice.toFixed(2)}</p>
        <button className="add-to-cart">BUY ITEMS</button>
      </div>
    </>
  );
};

export default React.memo(CartResume);
