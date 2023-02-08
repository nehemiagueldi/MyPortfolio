import React from "react";
import "./about.css";
import ME from "../../assets/Photo2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section id="about">
      <h5 data-aos="fade-up" data-aos-offset="250">Get To Know</h5>
      <h2 data-aos="fade-up" data-aos-offset="250">About Me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="zoom-in" data-aos-offset="380">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content" data-aos="fade-left" data-aos-offset="480">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5> 
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          {/* <h3>Who Am I?</h3> */}

          <p>
          Hi, I'm Nehemia Gueldi, most people call me Nehemia. Currently studying Informatics at Universitas Multimedia Nusantara. I'm interested on Web Development. Thanks for visiting my personal website, this website was made using React Framework. Therefore, I am very happy to implement my knowledge in Web creation and I can socialize and easily adapt to new environments. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
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

export default About;
