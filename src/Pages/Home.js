import React from "react";
import "../Components/cssComponents/home.css";
import { Carousel } from "react-bootstrap";
import crystalbackground2 from "../images/backgrounds/crystal-background2.png";
import crystalbackground4 from "../images/backgrounds/crystal-background4.png";
import crystalbackground5 from "../images/backgrounds/crystal-background5.png";

function Home() {
  return (
    <div>
      <div className="Carouseldiv">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              alt="Carousel1"
              src={crystalbackground4}
              className="Carousel"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              color="transparent"
              alt="Carousel2"
              src={crystalbackground2}
              className="Carousel"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              alt="Carousel3"
              src={crystalbackground5}
              className="Carousel"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="homepageParagraph">
        <div className="homepagetext">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            varius tristique fermentum. Nunc elit turpis, faucibus ut lorem
            consectetur, pharetra fringilla orci. Vivamus ornare tortor in magna
            luctus porttitor. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Integer vestibulum imperdiet lectus a venenatis.
            Vestibulum semper quam eu velit accumsan, ac scelerisque nibh
            vehicula. Maecenas ornare ac arcu et varius. Praesent non leo non
            urna interdum aliquet. Sed auctor magna eget luctus dictum. Donec
            sed est mauris. Sed quam nisl, faucibus et convallis sed, eleifend
            ultricies dui. Nam et justo orci. Mauris et nisi sit amet risus
            commodo aliquet. In euismod quis odio ac malesuada. Fusce molestie
            venenatis enim at tristique. Aliquam varius eu nulla ac rutrum.
          </p>
        </div>

        <img
          src={crystalbackground2}
          alt="homepagepic"
          className="homepageimg"
        />
      </div>
      <div className="Main">
        <a className="shopButton" href="./Shop">
          {" "}
          VISIT THE SHOP{" "}
        </a>
      </div>
    </div>
  );
}

export default Home;
