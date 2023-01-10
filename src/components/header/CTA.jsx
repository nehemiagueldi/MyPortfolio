import React from "react";
import CV from "../../assets/Nehemia-Gueldi-CV.pdf";
// {CV}

const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/1g_xzvjPEkcqyT_IKMS6lnEbWlz950Xwn/view?usp=sharing" target="_blank" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
