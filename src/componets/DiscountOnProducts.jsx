import { useState } from "react";

import { Link } from "react-router-dom";
const DiscountOnProducts = () => {
  const items = [
    {
      img: "/public/assets/img/realme-8.jpg",
      description: "Cyber Black, 8GB RAM,128GB Storage",
      heading: "Realme 8",
    },
    {
      img: "/public/assets/img/redmi-a4.jpg",
      description: "Starry Black, 4GB RAM, 64GB Storage",
      heading: "Redmi A4 5G",
    },
    {
      img: "/public/assets/img/galaxy-m05.jpg",
      description: "Mint Green, 4GB RAM, 64 GB Storage",
      heading: "Samsung Galaxy M05",
    },
    {
      img: "/public/assets/img/one-plus-mobile.jpg",
      description: "Super Silver, 8GB RAM, 128GB Storage",
      heading: "OnePlus Nord CE4 Lite 5G",
    },
    {
      img: "/public/assets/img/iqoo-mobile.jpg",
      description: "Titanium, 6GB RAM, 128GB Storage",
      heading: "iQOO Z10x 5G",
    },
    {
      img: "/public/assets/img/vivo-y19.jpg",
      description: "Titanium Silver, 6GB RAM, 128GB Storage",
      heading: "VIVO Y19 5G ",
    },
    {
      img: "/public/assets/img/redmi-13.jpg",
      description: "awaiian Blue, 6GB+128GB",
      heading: "Redmi 13 5G",
    },
    {
      img: "/public/assets/img/poco-c75.jpg",
      description: "Enchanted Green (4GB, 64GB)",
      heading: "POCO C75 5G",
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
              <h1 className="section-title">Upto 15% off ON Mobiles</h1>
              <div className="slider-container">
                <button className="nav-button left" onClick={prev}>
                  ❮
                </button>
                <Link to="/subCategories">
                  <div className="card-row">
                    {visibleCards.map((item, index) => (
                      <div className="econtainercard" key={index}>
                        <img
                          className="discount-image"
                          src={item.img}
                          alt={item.heading}
                        />
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

export default DiscountOnProducts;
