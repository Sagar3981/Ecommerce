// CarouselComponent.jsx
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  "./../../public/assets/img/c1.webp",
  "./../../public/assets/img/c2.webp",
  "./../../public/assets/img/c3.jpg",
  "./../../public/assets/img/c4.webp",
  "./../../public/assets/img/c5.webp",
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CarouselComponent = () => {
  return (
    <>
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={true}
          showDots={true}
        >
          {images.map((img, idx) => (
            <div className="carousel-slide" key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="carousel-image"
              />
              <button className="shop-now-btn">Shop Now</button>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
