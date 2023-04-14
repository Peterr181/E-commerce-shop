import React from "react";
import "./InfoNavbar.scss";
const InfoNavbar = () => {
  return (
    <div className="infonavbar__wrapper">
      <div className="infonavbar__container">
        <div className="infonavbar__container__contact">
          <div className="infonavbar__container__contact__address">
            <p>
              <ion-icon name="location-outline"></ion-icon>
            </p>
            <p>61 Blue Street, Warsaw</p>
          </div>
          <div className="infonavbar__container__contact__address">
            <p>
              <ion-icon name="call-outline"></ion-icon>
            </p>
            <span>123-456-789</span>
          </div>
        </div>
        <div className="infonavbar__container__login">
          <div className="infonavbar__container__login__wishlist">
            <p>
              <ion-icon name="heart-outline"></ion-icon>
            </p>
            <p>Wishlist</p>
          </div>
          <div className="infonavbar__container__login__wishlist">
            <p>
              <ion-icon name="person-outline"></ion-icon>
            </p>
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoNavbar;
