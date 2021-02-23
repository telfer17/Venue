import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_black">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">The Steelyard</div>
        <div className="footer_copyright">
          The Steelyard 2021. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
