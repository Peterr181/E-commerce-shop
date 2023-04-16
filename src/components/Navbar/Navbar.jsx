import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ setIsCartClicked, setIsLogoClicked }) => {
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isSticky, setIsSticky] = useState(false);
  const heroSectionRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartClicked = () => {
    setIsCartClicked(true);
    setIsLogoClicked(false);
  };

  const handleLogoClicked = () => {
    setIsCartClicked(false);
    setIsLogoClicked(true);
  };

  const handleMobileMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
                <p onClick={handleCartClicked} className="carticon">
                  <ion-icon name="cart"></ion-icon>
                  {cartItemsQuantity > 0 && (
                    <div className="itemsquantity__circle">
                      {cartItemsQuantity}
                    </div>
                  )}
                </p>
              </li>
            </ul>
          </div>
          <div className="mobile__menu">
            <p onClick={handleMobileMenuClick}>
              <ion-icon name="menu"></ion-icon>
            </p>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="menu__overlay">
          <div className="mobileclose__btn">
            <p onClick={handleMobileMenuClick}>
              <ion-icon name="close"></ion-icon>
            </p>
          </div>
          <div className="mobilecart__container">
            <p onClick={handleCartClicked} className="carticon">
              <ion-icon name="cart"></ion-icon>
              {cartItemsQuantity > 0 && (
                <div className="itemsquantity__circle">{cartItemsQuantity}</div>
              )}
            </p>
          </div>
          <div className="menu__wrapper">
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
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
