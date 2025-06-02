import { useState } from "react";

import { Link } from "react-router-dom";
const Elctronics = () => {
  const items = [
    {
      img: "assets/img/w2.webp",
      description: "Best Model watches",
      heading: "Noise",
    },
    {
      img: "assets/img/a2.webp",
      description: "Smart Fitness Band",
      heading: "Fitbit",
    },
    {
      img: "assets/img/a3.webp",
      description: "High Quality Earbuds",
      heading: "Sony",
    },
    {
      img: "assets/img/e1.webp",
      description: "Latest Smartwatch",
      heading: "Apple Watch",
    },
    {
      img: "assets/img/b1.avif",
      description: "Wireless Headphones",
      heading: "Bose",
    },
    {
      img: "assets/img/b2.avif",
      description: "4K Action Camera",
      heading: "GoPro",
    },
    {
      img: "assets/img/b3.avif",
      description: "Gaming Mouse",
      heading: "Logitech",
    },
    {
      img: "assets/img/e5.webp",
      description: "Mechanical Keyboard",
      heading: "Corsair",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 5;

  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? items.length - cardsToShow : prev - 1
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + cardsToShow >= items.length ? 0 : prev + 1
    );
  };

  // Slice the items array to get visible cards
  const visibleCards = items.slice(startIndex, startIndex + cardsToShow);

  // Handle wrap-around when slicing near the end
  if (visibleCards.length < cardsToShow) {
    visibleCards.push(...items.slice(0, cardsToShow - visibleCards.length));
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="emaincard">
              <h1 className="section-title">Best Of Electronics</h1>
              <div className="slider-container">
                <button className="nav-button left" onClick={prev}>
                  ❮
                </button>
                <Link to="/subCategories">
                  <div className="card-row">
                    {visibleCards.map((item, index) => (
                      <div className="econtainercard" key={index}>
                        <img src={item.img} alt={item.heading} />
                        <p>{item.description}</p>
                        <h4>{item.heading}</h4>
                      </div>
                    ))}
                  </div>
                </Link>
                <button className="nav-button right" onClick={next}>
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Elctronics;
