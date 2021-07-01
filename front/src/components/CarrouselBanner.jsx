import React from "react"
import { Carousel } from "react-bootstrap"
import banner from "./utils/banner.png"
import banner2 from "./utils/banner2.png"
import banner3 from "./utils/banner3.png"

const CarrouselBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h3>All marvel comics in one place!</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Buy amazings comics</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>A lot of categories to choose</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarrouselBanner
