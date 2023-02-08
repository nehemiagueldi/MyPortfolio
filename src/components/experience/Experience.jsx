import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5 data-aos="fade-down" data-aos-offset="270">What Skills I Have</h5>
      <h2 data-aos="fade-down" data-aos-offset="270">My Skills</h2>

      <div className="container experience__container" data-aos="fade-up" data-aos-offset="470">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TailWind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Laravel</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
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

export default Experience;
