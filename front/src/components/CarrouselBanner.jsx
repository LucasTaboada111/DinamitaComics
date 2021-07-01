import React from "react";
import styles from "../styles/carrouselBanner.module.css";
import {Carousel} from "react-bootstrap";
import banner from './utils/banner.png'
import banner2 from './utils/banner2.png'
import banner3 from './utils/banner3.png'



const CarrouselBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
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
  );
};

export default CarrouselBanner;
