import React from "react";
import CV from "../../assets/Nehemia-Gueldi-CV.pdf";
// {CV}
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTA = () => {
  return (
    <div className="cta" data-aos="flip-up">
      <a href="https://drive.google.com/file/d/1g_xzvjPEkcqyT_IKMS6lnEbWlz950Xwn/view?usp=sharing" target="_blank" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
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


export default CTA;
