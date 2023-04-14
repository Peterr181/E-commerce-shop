import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ setIsCartClicked, setIsLogoClicked }) => {
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isSticky, setIsSticky] = useState(false);
  const heroSectionRef = useRef(null);

  const handleCartClicked = () => {
    setIsCartClicked(true);
    setIsLogoClicked(false);
  };

  const handleLogoClicked = () => {
    setIsCartClicked(false);
    setIsLogoClicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroSectionRef.current;
      if (heroSection) {
        const { bottom } = heroSection.getBoundingClientRect();
        setIsSticky(bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={heroSectionRef}></div>
      <div className={`navbar__wrapper${isSticky ? " sticky" : ""}`}>
        <nav className="navbar__container">
          <div className="navbar__container__logo">
            <Link to="/" onClick={handleLogoClicked} className="logo">
              <span>REFAO</span>
            </Link>
          </div>
          <div className="navbar__container__elements">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <Link
                  to="/cart"
                  onClick={handleCartClicked}
                  className="carticon"
                >
                  <ion-icon name="cart"></ion-icon>
                  {cartItemsQuantity > 0 && (
                    <div className="itemsquantity__circle">
                      {cartItemsQuantity}
                    </div>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
