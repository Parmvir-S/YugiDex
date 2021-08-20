import { Carousel } from "react-bootstrap";
import blueEyes from '../images/blue-eyes.jpg';
import redEyes from '../images/red-eyes.jpg';
import darkMag from '../images/dark-mag.jpg'
import "./CarouselMain.css";

const CarouselMain = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={redEyes}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={blueEyes}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={darkMag}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselMain;
