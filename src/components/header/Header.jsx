import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Foto-removebg (2).png";
// import ME from "../../assets/OpenPeepsBust1.png";
import HeaderSocials from "./HeaderSocials";
import { BiMouseAlt } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 data-aos= "fade-down">Hello I'm</h5>
        <h1 data-aos= "fade-right">Nehemia Gueldi</h1>
        <h5 className="text-light" data-aos= "fade-left">Informatics Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me" data-aos= "zoom-in">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className="scroll__down">
          <BiMouseAlt/>
          {/* Scroll Down */}
        </a>
      </div>
    </header>
  );
};

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default Header;
