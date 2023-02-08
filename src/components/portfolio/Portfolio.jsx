import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/happywork.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/gercepnet.jpg";
import IMG5 from "../../assets/ecommerce.jpg";
import IMG6 from "../../assets/cryptex.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 data-aos="fade-up" data-aos-offset="270"> My Recent Work </h5>
      <h2 data-aos="fade-up" data-aos-offset="270"> Portfolio </h2>
      <div className="container portfolio__container" data-aos="fade-up" data-aos-offset="480">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> Happy Work </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nehemiagueldi/HappyWork" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://nehemiagueldi.github.io/HappyWork/index.html"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Gercep News V1 </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nehemiagueldi/GercepNewsV1" className="btn" target="_blank">
              Github
            </a>
            {/* <a
              href="https://gercepnetz.000webhostapp.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3> Gercep News V2 </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nehemiagueldi/GercepNewsV2" className="btn" target="_blank">
              Github
            </a>
            {/* <a
              href="https://gercepnetz.000webhostapp.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3> Gercep Net </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nehemiagueldi/GercepNet" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://gercepnetz.000webhostapp.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3> Ecommerce Example Page </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nehemiagueldi/ecommerce-example" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://ecommerce-example.pages.dev/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3> Cryptex </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nehemiagueldi/Cryptex" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://nehemiagueldi.github.io/Cryptex/#"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3> This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://gercepnetz.000webhostapp.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
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

export default Portfolio;
