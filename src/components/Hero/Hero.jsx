import React, { useRef } from "react";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section id="hero-section" className="hero__container" ref={heroRef}>
      <div className="hero__container__item">
        <h1>ONLINE SHOPPING</h1>
        <p>
          Refao is here for you if you want to buy some new items! We have all
          stuff from clothes to electronics and even jewellery. Feel free to
          inspect all this items and buy something if u like it!
        </p>
        <button className="shopnow__button centerfix">SHOP NOW</button>
      </div>
    </section>
  );
};

export default Hero;
