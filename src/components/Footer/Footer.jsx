import React from "react";
import "./Footer.scss";
import visa from "../../utils/visa.png";
import discover from "../../utils/discover.png";
import master from "../../utils/master_card.png";
import paypal from "../../utils/paypal.png";
import american from "../../utils/amarican_express.png";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__container__wrapper">
        <div className="footer__container__wrapper__firstcol">
          <h2>REFAO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dignissimos voluptatum sed tempora deserunt! Quia nulla, aspernatur
            itaque quam nostrum eaque incidunt totam sunt, sapiente numquam
            temporibus laborum ex enim?
          </p>
        </div>
        <div className="footer__container__wrapper__secondcol">
          <h3>USEFUL LINKS</h3>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Location</p>
          <p>Affilates</p>
          <p>Contact</p>
        </div>
        <div className="footer__container__wrapper__thirdcol">
          <h3>CATEGORY</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Accesories</p>
          <p>Shoes</p>
          <p>Denim</p>
        </div>
        <div className="footer__container__wrapper__quadcol">
          <h3>GET LATEST UPDATE</h3>
          <p>There are many variations of passages items avaiable</p>
          <form action="#">
            <input type="email" name="email" placeholder="Your email" />
            <button type="submit">
              <ion-icon name="send-outline"></ion-icon>
            </button>
          </form>
        </div>
      </div>
      <div className="footer__container__otherinfo">
        <div className="footer__container__otherinfo__copy">
          <p>© All Rights Reserved by Peterr181</p>
        </div>
        <div className="footer__container__otherinfo__cards">
          <img src={visa} alt="cardlogo" />
          <img src={discover} alt="cardlogo" />
          <img src={master} alt="cardlogo" />
          <img src={paypal} alt="cardlogo" />
          <img src={american} alt="cardlogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
