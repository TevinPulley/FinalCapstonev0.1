import "../Components/cssComponents/about.css";
import React from "react";
import aboutBackground from "../images/backgrounds/aboutBackground.jpg";

function About() {
  return (
    <div className="aboutpageparagraph">
      <div className="aboutpagetext">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius
          tristique fermentum. Nunc elit turpis, faucibus ut lorem consectetur,
          pharetra fringilla orci. Vivamus ornare tortor in magna luctus
          porttitor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Integer vestibulum imperdiet lectus a venenatis. Vestibulum
          semper quam eu velit accumsan, ac scelerisque nibh vehicula. Maecenas
          ornare ac arcu et varius. Praesent non leo non urna interdum aliquet.
          Sed auctor magna eget luctus dictum. Donec sed est mauris. Sed quam
          nisl, faucibus et convallis sed, eleifend ultricies dui. Nam et justo
          orci. Mauris et nisi sit amet risus commodo aliquet. In euismod quis
          odio ac malesuada. Fusce molestie venenatis enim at tristique. Aliquam
          varius eu nulla ac rutrum.
        </p>
      </div>

      <img src={aboutBackground} alt="aboutpagepic" className="aboutpageimg" />
    </div>
  );
}

export default About;
