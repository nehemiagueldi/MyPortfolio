import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Collecting and evaluating user <needs></needs></p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Illustrate product design ideas</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Design user interface elements</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Develop interface mockups and prototypes</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Create graphics or rough drafts for presentation</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Layout adjustments based on user feedback</p>
            </li>
            {/* <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li> */}
          </ul>
        </article>
        {/* ENO OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Designing Website Logic</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Create a Wesbite-Friendly Design</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Using Various Web Developer Tools</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Have HTML/CSS and JavaScript Capabilities</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Designing, developing and modifying websites</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Build a UI that can help users</p>
            </li>
            {/* <li>
              <FaCheck className="service__list-icon" />
              <p>Understand user requirements for implementing content on a Website</p>
            </li> */}
          </ul>
        </article>
        {/* ENO OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Database</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Ensures customer databases are protected</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Ensures customer databases are monitored</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Database restoration, as needed</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Management and monitoring of disk space</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Performance of daily or weekly backups</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Provides enterprises with centralized storage</p>
            </li>
            {/* <li>
              <FaCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li> */}
          </ul>
        </article>
        {/* ENO OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
