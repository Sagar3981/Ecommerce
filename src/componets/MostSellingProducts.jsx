import { useState } from "react";

import { Link } from "react-router-dom";
const MostSellingProducts = () => {
  const items = [
    {
      img: "/public/assets/img/pngwing.com (88).png",
      description: "Best Model watches",
      heading: "Noise",
    },
    {
      img: "/public/assets/img/l-64518810-try-this-original-imahcywfbnhcqrxg.webp",
      description: "Smart Fitness Band",
      heading: "Fitbit",
    },
    {
      img: "/public/assets/img/-original-imah3zvdp7ucukjr.webp",
      description: "High Quality Earbuds",
      heading: "Boat",
    },
    {
      img: "/public/assets/img/pngwing.com (87).png",
      description: "Latest Smartwatch",
      heading: "Apple Watch",
    },
    {
      img: "/public/assets/img/b1.avif",
      description: "Running Shoes for Men",
      heading: "Nike",
    },
    {
      img: "/public/assets/img/vivo-y19.jpg",
      description: "Titanium Silver, 6GB RAM, 128GB Storage",
      heading: "VIVO Y19 5G ",
    },
    {
      img: "/public/assets/img/pngwing.com (90).png",
      description: "Gaming Mouse",
      heading: "Logitech",
    },
    {
      img: "/public/assets/img/boat-speaker.jpg",
      description: "Bluetooth Speaker with 10W RMS Stereo Sound",
      heading: "Boat",
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
              <h1 className="section-title">Most Selling Products</h1>
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

export default MostSellingProducts;
