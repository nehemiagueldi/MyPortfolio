import React from "react";
import CV from "../../assets/NehemiaGueldiCV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Nehemia Gueldi CV.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
