import { RiTruckFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoMdLocate } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckOutDetails = () => {
  const [sectionChange, setsectionChange] = useState("address");

  const handleSectionChange = (e) => {
    setsectionChange(e);
  };

  return (
    <>
      <div className="checkout-main-container">
        <div className="checkout-deatils">
          <div
            className={`login-change-div ${
              sectionChange === "login" ? "selected-login-change-div" : ""
            }`}
          >
            <div className="login-change-div1">
              <p className="login-change-div-serial-number">1</p>
              <div className="login-change-div-data">
                <h1>login</h1>
                <p>+919381747181</p>
              </div>
            </div>
            <div className="login-change-div2">
              <button
                onClick={() => handleSectionChange("login")}
                className="login-change-div-button"
              >
                change
              </button>
            </div>
          </div>
          {sectionChange === "login" && (
            <div className="checkout-login">
              <div className="checkout-titles">
                <p className="checkout-serial">1</p>
                <h1 className="checkout-headings">login</h1>
              </div>
              <div className="checkout-login-details">
                <div className="checkout-login-div1">
                  <p className="phone-number">
                    <span>phone</span>+919985673258
                  </p>
                  <h1 className="check-out-log-sign">
                    Logout & Signup in another account
                  </h1>
                  <button
                    onClick={() => handleSectionChange("address")}
                    className="continue-checkout-button"
                  >
                    continue checkout
                  </button>
                </div>

                <div className="checkout-login-div2">
                  <p className="advantages-login">
                    Advantages of our secure login
                  </p>
                  <h1 className="advantages-text">
                    <RiTruckFill className="checkout-login-icons" /> easiliy
                    track orders,hassle free returns
                  </h1>
                  <h1 className="advantages-text">
                    <FaBell className="checkout-login-icons" /> get relevent
                    alerts and recommendation
                  </h1>
                  <h1 className="advantages-text">
                    <IoMdStar className="checkout-login-icons" /> wishlist,
                    reviews, ratings and more.
                  </h1>
                </div>
              </div>
              <div className="note">
                <p>
                  Please note that upon clicking "Logout" you will loose all
                  items in the cart and will be redirected to the Flipcart home
                  page.
                </p>
              </div>
            </div>
          )}

          <div
            className={`login-change-div ${
              sectionChange === "address" ? "selected-address-div" : ""
            }`}
          >
            <div className="login-change-div1">
              <p className="login-change-div-serial-number">2</p>
              <div className="login-change-div-data">
                <h1>delivery address</h1>
                <p>kakinada</p>
              </div>
            </div>
            <div className="login-change-div2">
              <button
                onClick={() => handleSectionChange("address")}
                className="login-change-div-button"
              >
                change
              </button>
            </div>
          </div>
          {sectionChange === "address" && (
            <div
              className={`checkout-address ${
                sectionChange === "summary" ? "selected-checkout-address" : ""
              }`}
            >
              <div className="checkout-titles">
                <p className="checkout-serial">2</p>
                <h1 className="checkout-headings">delivery address</h1>
              </div>
              <div className="checkout-address-details">
                <div className="checkout-address-div1">
                  <h1 className="checkout-add-address">
                    <span>
                      <input type="radio" />
                    </span>
                    add a new address
                  </h1>
                  <button className="checkout-current-locaton">
                    <span>
                      <IoMdLocate />
                    </span>
                    Use my current location
                  </button>
                </div>
                <div className="checkout-address-div2">
                  <div>
                    <input
                      className="checkout-input"
                      type="text"
                      placeholder="name"
                    />
                    <input
                      className="checkout-input"
                      type="number"
                      placeholder="mobile number"
                    />
                  </div>
                  <div>
                    <input
                      className="checkout-input"
                      type="text"
                      placeholder="pincode"
                    />
                    <input
                      className="checkout-input"
                      type="text"
                      placeholder="locality"
                    />
                  </div>
                  <div>
                    <textarea
                      className="checkout-input-textarea"
                      name=""
                      id=""
                      placeholder="Address (area and street)"
                    ></textarea>
                  </div>
                  <div>
                    <input
                      className="checkout-input"
                      type="text"
                      placeholder="city/district/town"
                    />
                    <select className="checkout-input" defaultValue="">
                      <option value="" disabled>
                        Select State
                      </option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>
                  <div>
                    <input
                      className="checkout-input"
                      type="text"
                      placeholder="landmark(optional)"
                    />
                    <input
                      className="checkout-input"
                      type="text"
                      placeholder=" alternate mobile number (optional)"
                    />
                  </div>
                </div>
                <div className="checkout-address-div3">
                  <p className="address-type">address type</p>
                  <div className="radio-choice">
                    <h1 className="checkoutdelivery-time">
                      <span>
                        <input type="radio" />
                      </span>
                      home (all every day)
                    </h1>
                    <h1 className="checkoutdelivery-time">
                      <span>
                        <input type="radio" />
                      </span>
                      work (delivery between 10am - 5pm)
                    </h1>
                  </div>
                  <button
                    onClick={() => handleSectionChange("summary")}
                    className="checkout-address-button"
                  >
                    save and deliver here
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            className={`login-change-div ${
              sectionChange === "summary" ? "selected-order-summary" : ""
            }`}
          >
            <div className="login-change-div1">
              <p className="login-change-div-serial-number">3</p>
              <div className="login-change-div-data">
                <h1>order summary</h1>
              </div>
            </div>
            <div className="login-change-div2"></div>
          </div>
          {sectionChange === "summary" && (
            <div className="checkout-order-summary">
              <div className="checkout-titles">
                <p className="checkout-serial">3</p>
                <h1 className="checkout-headings">order summary</h1>
              </div>
              <div className="checkout-order-summary-div1">
                <div className="cart-single-product">
                  <div className="cart-product-top-row">
                    <div className="cart-product-image-div">
                      <img
                        className="cart-product-image"
                        src="/public/assets/img/xl-fms-181-fllseve-pop-ol-force-original-imah459zhrvvjp4m.webp"
                      />
                    </div>
                    <div className="cart-product-detils">
                      <h1 className="cart-product-name">
                        Veirdo Full Sleeve Printed Men Sweatshirt
                      </h1>
                      <h1 className="cart-product-size">Size: L</h1>
                      <h1 className="cart-product-seller">
                        Seller:AwesomefabShoppingPvt
                      </h1>
                      <div className="cart-product-price">
                        <p className="product-price">₹2,499</p>
                        <p className="discount-price">₹599</p>
                        <p className="discount-off">76%</p>
                        <p className="availabile-offers">2-offers-available</p>
                      </div>
                    </div>
                    <div className="delivery-date">
                      <p>Delivery by Mon Jun 2 </p>
                    </div>
                  </div>
                  <div className="cart-product-buttons">
                    <div className="quantity-of-product">
                      <button className="minus-button">-</button>
                      <input className="quantity-input" type="text" value={1} />
                      <button className="plus-button">+</button>
                    </div>
                    <div className="save-remove">
                      <button>save for later</button>
                      <button>remove</button>
                    </div>
                  </div>
                </div>
                <div className="gst-invoice">
                  <h1>
                    <span>
                      <input type="checkbox" />
                    </span>
                    use GST invoice
                  </h1>
                </div>
                <div className="order-confirm-email">
                  <h1>
                    Order confirmation email will be sent to{" "}
                    <span>
                      <input type="email" placeholder="Enter your email" />
                    </span>
                  </h1>
                  <Link to="/PaymentPage">
                    <button className="order-summary-button">continue</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="checkout-price">
          <div className="checkout-price-container">
            <div className="cart-price-details">
              <h1>price details</h1>
              <hr />
            </div>
            <div className="price-summary">
              <div className="price-summary-1">
                <p>Price (6 items)</p>
                <p>₹19,491</p>
              </div>
              <div className="price-summary-1">
                <p>discount</p>
                <p className="price-itmes">− ₹5,000</p>
              </div>
              <div className="price-summary-1">
                <p>Delivery Charges</p>
                <p className="price-itmes">Free</p>
              </div>
              <div className="price-summary-1">
                <p>Protect Promise Fee</p>
                <p>₹9</p>
              </div>
              <hr />
              <div className="price-summary-1">
                <p className="total-amount">Total Amount</p>
                <p>₹2,008</p>
              </div>
              <hr />
              <div>
                <p className="you-save">You will save ₹4,991 on this order</p>
              </div>
            </div>
            <div className="verify-div">
              <MdVerifiedUser className="MdVerifiedUser-icon" />
              <p>
                Safe and Secure Payments.Easy returns.100% Authentic products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckOutDetails;
