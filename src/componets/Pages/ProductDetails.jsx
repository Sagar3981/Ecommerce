import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { BsHeart } from "react-icons/bs";
import Header from "../common/Header";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const ProductDetails = () => {
  const images = [
    "/assets/img/a1.webp",
    "/assets/img/a2.webp",
    "/assets/img/a3.webp",
    "/assets/img/a4.webp",
    "/assets/img/a1.webp",
    "/assets/img/a2.webp",
    "/assets/img/a3.webp",
    "/assets/img/a4.webp",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      <Header />
      <div className="container productDetails-main-container">
        <div className="row productDetails-constainer">
          <div className="productDetails-img-container">
            <div className="product-image-wrapper shadow-sm p-3 rounded bg-white position-relative">
              <div className="wishlist-button">
                <button className="btn btn-light shadow-sm rounded-circle">
                  <BsHeart />
                </button>
              </div>

              <div className="main-image-container">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Product Image",
                      isFluidWidth: true,
                      src: mainImage,
                    },
                    largeImage: {
                      src: mainImage,
                      width: 1200,
                      height: 1600,
                    },
                    enlargedImagePosition: "beside",
                    enlargedImageContainerStyle: {
                      marginLeft: "30px",
                    },
                    enlargedImageContainerDimensions: {
                      width: "140%",
                      height: "150%",
                    },
                  }}
                />
              </div>

              <div className="thumbnail-row mt-3">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    className={`thumbnail ${mainImage === img ? "active" : ""}`}
                    onMouseEnter={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>
            <div className="purchaseAction-row">
              <button className="custom-cart">
                <FaShoppingCart /> <span>ADD TO CART</span>
              </button>
              <button className="custom-buy">
                <FaBolt /> <span>BUY NOW</span>
              </button>
            </div>
          </div>
          <div className="productDetails-info-container">
            <div className="product-info-container">
              <h1 className="product-title">
                PLAY Latest Smart Android 13 1+8G 5G WiFi BT 15k Lm 4k 8k 180
                degree Rotation (25000 lm / Wireless / Remote Controller)
                Portable Projector (Black)
              </h1>
              <a href="#" className="review-link">
                Be the first to Review this product
              </a>

              <div className="special-price">Special price</div>

              <div className="price-row">
                <span className="current-price">₹11,153</span>
                <span className="old-price">₹55,000</span>
                <span className="discount">79% off</span>
              </div>

              <div className="offers-container">
                <div className="offer-heading">Available offers</div>
                <div className="offer-item">
                  <span>🏷️</span> 5% Cashback on Flipkart Axis Bank Credit Card
                  <a className="tnc-link" href="#">
                    T&C
                  </a>
                </div>
                <div className="offer-item">
                  <span>🏷️</span> 10% off on SBI Credit Card EMI
                  <a className="tnc-link" href="#">
                    T&C
                  </a>
                </div>
                <div className="offer-item">
                  <span>🏷️</span> 10% off on Axis Credit EMI Txns
                  <a className="tnc-link" href="#">
                    T&C
                  </a>
                </div>
                <div className="offer-item">
                  <span>🏷️</span> Extra 9% off (inclusive of cashback)
                  <a className="tnc-link" href="#">
                    T&C
                  </a>
                </div>
                <a className="tnc-link mt-2" href="#">
                  View 7 more offers
                </a>
              </div>

              <div className="info-section mt-3">
                <div>
                  <span className="info-label">Warranty</span> 1 Year PLAY STORE
                  Warranty. Contact: 9577 454 454 /
                  <a href="mailto:support@playprojector.in">
                    {" "}
                    support@playprojector.in
                  </a>
                  .
                </div>
              </div>

              <div className="info-section mt-3">
                <div>
                  <span className="info-label">Delivery</span>
                  Enter Delivery Pincode
                  <span className="delivery-check">Check</span>
                </div>
                <div className="delivery-date">
                  Delivery by <b>30 May, Friday</b> <span>| Free</span>
                  <br />
                  <small>if ordered before 4:59 PM</small>
                </div>
                <a className="tnc-link mt-2" href="#">
                  View Details
                </a>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <h6 className="info-title">Highlights</h6>
                  <ul className="info-list">
                    <li>Projector Type: UHD | Chipset: LCD</li>
                    <li>Maximum Projection Distance: 16.5 ft</li>
                    <li>Lamp Life: 50000 hr</li>
                    <li>Resolution: 1920×1080 pixel</li>
                    <li>Aspect Ratio: 14:9</li>
                    <li>Maximum Brightness: 25000 lm</li>
                    <li>HDMI Ports: 1</li>
                  </ul>

                  <h6 className="info-title mt-4">Seller</h6>
                  <div className="seller-info">
                    <strong className="text-primary">
                      ADVANCEPROJECTORINDIA
                    </strong>
                    <span className="seller-rating">3.8 ★</span>
                    <p className="small text-muted mt-2">
                      7 Days Replacement Policy
                    </p>
                    <a href="#" className="text-primary">
                      See other sellers
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <h6 className="info-title">Services</h6>
                  <div className="services-info">
                    <p>✔️ 1 Year Warranty. Call: 9577 454 454</p>
                    <p>Authorized seller: Advance Projector India</p>
                    <p>💰 Cash on Delivery available</p>
                  </div>
                </div>
              </div>

              {/* Specifications Box */}
              <div className="specs-box mt-4">
                <h5 className="specs-title">Specifications</h5>

                <div className="specs-section">
                  <h6>General</h6>
                  <div className="spec-item">
                    <b>Sales Package:</b> Advance Play Projector*1, User manual
                    *1, Remote controller *1, AV cable *1, Warranty Card*1,
                    Power Cable*1, 3D Glass*1
                  </div>
                  <div className="spec-item">
                    <b>Model Name:</b> Latest Smart Android 13 1+8G 5G WiFi BT
                    15k Lm 4k 8k 180 degree Rotation
                  </div>
                  <div className="spec-item">
                    <b>Part Number:</b> Victory AVI
                  </div>
                  <div className="spec-item">
                    <b>Color:</b> Black
                  </div>
                  <div className="spec-item">
                    <b>Portable:</b> Yes
                  </div>
                  <div className="spec-item">
                    <b>Maximum Brightness:</b> 25000 lm
                  </div>
                  <div className="spec-item">
                    <b>Light Source:</b> LED
                  </div>
                  <div className="spec-item">
                    <b>Minimum Projection Distance:</b> 120 inch
                  </div>
                  <div className="spec-item">
                    <b>Projection Ratio:</b> 30-300 inches
                  </div>
                  <div className="spec-item">
                    <b>Internal Storage:</b> 8000 MB
                  </div>
                  <div className="spec-item">
                    <b>Mounting:</b> Ceiling, Front, Rear
                  </div>
                </div>

                <div className="specs-section mt-4">
                  <h6>Display And Audio Features</h6>
                  <div className="spec-item">
                    <b>HD Graphic Mode:</b> 1080
                  </div>
                  <div className="spec-item">
                    <b>3D Support:</b> Yes
                  </div>
                  <div className="spec-item">
                    <b>3D Glasses Type:</b> Red & Blue Passive 3D Glass
                  </div>
                  <div className="spec-item">
                    <b>Dynamic Contrast Ratio:</b> 15000:1
                  </div>
                  <div className="spec-item">
                    <b>Graphic Mode:</b> 1*HDMI\AV\1*USB\1*3.5 Audio Port
                  </div>
                  <div className="spec-item">
                    <b>Adjustable Aspect Ratio:</b> 16:9
                  </div>
                  <div className="spec-item">
                    <b>Standard Brightness:</b> 25000 lm
                  </div>
                  <div className="spec-item">
                    <b>Other Display Features:</b> Projection Distance (1–4m),
                    Scale 50%, Throw Ratio 1.25:1
                  </div>
                  <div className="spec-item">
                    <b>Output Per Speaker:</b> 5 W
                  </div>
                  <div className="spec-item">
                    <b>Other Audio Features:</b> Multi-language Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
