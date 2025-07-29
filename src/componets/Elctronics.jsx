import { useState } from "react";

import { Link } from "react-router-dom";
const Elctronics = () => {
  const items = [
    {
      img: "/public/assets/img/HP-15-laptop.jpg",
      description: "AMD Ryzen 3 7320U (8GB LPDDR5, 512GB SSD) ",
      heading: "HP 15",
    },
    {
      img: "/public/assets/img/Qled-tv.jpg",
      description: " (43 inches) OptimaX Series Full HD",
      heading: "QLED Android TV ",
    },
    {
      img: "/public/assets/img/boult-earpods.jpg",
      description: " Truly Wireless in Ear Earbuds with 35H Playtime",
      heading: "Boult W20",
    },
    {
      img: "/public/assets/img/pngwing.com (91).png",
      description: "1.96 AMOLED Display, Premium Metallic Finish(Jet Black)",
      heading: "Noise",
    },
    {
      img: "/public/assets/img/bs-ultrapood-bullstorm-original-imahcus46hzumv9a.webp",
      description: "Wireless Headphones",
      heading: "Bose",
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
              <h1 className="section-title">Best Deals on Electronics</h1>
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
