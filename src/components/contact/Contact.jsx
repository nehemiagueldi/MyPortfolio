import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';
import { useRef } from "react";
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kbuxwzs",
      "template_3h75pso",
      form.current,
      "_oYOCdlj1tTlb0pOt"
    );
    e.target.reset();

    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <section id="contact">
      <h5 data-aos="fade-down" data-aos-offset="270">Get In Touch</h5>
      <h2 data-aos="fade-down" data-aos-offset="270">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options" data-aos="fade-right" data-aos-offset="470">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gueldinehemia@gmail.com</h5>
            <a href="mailto:gueldinehemia@gmail.com" target="_blank">
              Send a message 
              {/* <AiOutlineSend/> */}
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Nehemia Gueldi</h5>
            <a href="https://www.linkedin.com/in/nehemiagueldi" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62 89601177422</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6289601177422"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} data-aos="fade-left" data-aos-offset="470">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
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

export default Contact;
