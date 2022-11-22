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
          <Carousel.Item interval={7000}>
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
          <Carousel.Item interval={7000}>
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
          <Carousel.Item interval={7000}>
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
