import React from "react";
import CV from "../../assets/Nehemia-Gueldi-CV.pdf";
// {CV}

const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/16kUKNyipX0wyogzt1r2lvXVYfIejHKR1/view?usp=sharing" target="_blank" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
