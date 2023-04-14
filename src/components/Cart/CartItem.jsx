import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import test1 from "../../utils/iteminfo1.jpg";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

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

  const { title, quantity, total, price, id, image } = props.item;
  console.log(total);
  return (
    <div className="cart__container__item">
      <div className="cart__container__item__image">
        <img src={image} alt="item image" className="cart__image" />
      </div>
      <div className="cart__container__item__text">
        <h3>{title}</h3>
        <span>${price}</span>
        <div className="cart__container__item__buttons">
          <p
            onClick={removeItemHandler}
            className="cart__button cartremove__button"
          >
            {quantity === 1 ? (
              <ion-icon name="trash"></ion-icon>
            ) : (
              <ion-icon name="remove-circle"></ion-icon>
            )}
          </p>
          <span>{quantity} items.</span>
          <p
            onClick={addToCartHandler}
            className="cart__button cartadd__button"
          >
            <ion-icon name="add-circle"></ion-icon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
