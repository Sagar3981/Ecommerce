import { GoArrowLeft } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { FaGooglePay } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiBankLight } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { TbSquarePercentage } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [productData, setProductData] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePay = () => {
    setShowAnimation(true);

    // Show truck for 2 seconds
    setTimeout(() => {
      setAnimationDone(true);

      // Wait 5 seconds after checkmark appears
      setTimeout(() => {
        setShowAnimation(false);
        setAnimationDone(false);
        navigate("/");
      }, 5000);
    }, 2000);
  };

  const oderClick = () => {
    console.log("clicked");
  };
  const GetingProduct = async () => {
    try {
      const response = await BackEndApi.get("/cart/get-all-CartCollection");
      const withQuantity = response.data.data.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setProductData(withQuantity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetingProduct();
  }, []);
  const totalPrice = productData.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  return (
    <>
      <div className="payment-main-container">
        <div className="complete-payment-div">
          <div className="complete-payment-title">
            <div className="payment-title">
              {/* <GoArrowLeft className="left-arrow-payment" /> */}
              <h1>complete payment</h1>
            </div>
            <div className="payment-secure">
              <CiLock />
              <h1>100% secure</h1>
            </div>
          </div>
          <div className="complete-payment-row">
            <div className="complete-payment-method">
              <div className="complete-payment-method-div1">
                <div
                  className={`payment-column ${
                    paymentMethod === "upi" ? "selected-method" : ""
                  }`}
                  onClick={() => handlePaymentMethodChange("upi")}
                >
                  <div className="payment-upi">
                    <FaGooglePay className="upi-icon" />
                    <h1>upi</h1>
                  </div>
                  <div>
                    <p className="upi-text">Pay by any UPI app</p>
                  </div>
                </div>
                <hr className="payment-hr" />
                <div
                  className={`payment-column ${
                    paymentMethod === "card" ? "selected-method" : ""
                  }`}
                  onClick={() => handlePaymentMethodChange("card")}
                >
                  <div className="payment-upi">
                    <FaRegCreditCard className="upi-icon" />
                    <h1>credit / debit / atm card</h1>
                  </div>
                  <div>
                    <p className="upi-text">
                      Add and secure cards as per RBI guidelines
                    </p>
                    <p className="axis-card-discount">
                      5% unlimited cash back on flipkart axis bank credit card
                    </p>
                  </div>
                </div>
                <hr className="payment-hr" />
                <div
                  className={`payment-column ${
                    paymentMethod === "netbanking" ? "selected-method" : ""
                  }`}
                  onClick={() => handlePaymentMethodChange("netbanking")}
                >
                  <div className="payment-upi">
                    <PiBankLight className="upi-icon" />
                    <h1>net banking</h1>
                  </div>
                </div>
                <hr className="payment-hr" />
                <div
                  className={`payment-column ${
                    paymentMethod === "cod" ? "selected-method" : ""
                  }`}
                  onClick={() => handlePaymentMethodChange("cod")}
                >
                  <div className="payment-upi">
                    <BsCashCoin className="upi-icon" />
                    <h1>cash on delivery</h1>
                  </div>
                </div>
                <hr className="payment-hr" />
                <div
                  className={`payment-column ${
                    paymentMethod === "giftcard" ? "selected-method" : ""
                  }`}
                  onClick={() => handlePaymentMethodChange("giftcard")}
                >
                  <div className="payment-upi">
                    <HiOutlineGiftTop className="upi-icon" />
                    <h1>have a flipcart gift card</h1>
                  </div>
                </div>
                <hr className="payment-hr" />
                <div
                  className="payment-column"
                  onClick={() => handlePaymentMethodChange("emi")}
                >
                  <div className="payment-upi">
                    <TbSquarePercentage className="upi-icon" />
                    <h1>emi</h1>
                  </div>
                </div>
                <hr className="payment-hr" />
                <div
                  className="payment-column"
                  onClick={() => handlePaymentMethodChange("wallet")}
                >
                  <div className="payment-upi">
                    <CiWallet className="upi-icon" />
                    <h1>wallet</h1>
                  </div>
                </div>
              </div>

              <div className="complete-payment-method-div2">
                {/* UPI Method */}
                {paymentMethod === "upi" && (
                  <div className="upi-method">
                    <div className="upi-method-div1">
                      <input type="radio" />
                      <h1>add new UPI ID</h1>
                      <p>How to find ?</p>
                    </div>
                    <div className="upi-method-div2">
                      <label htmlFor="upi-id">UPI ID</label>
                      <input
                        type="text"
                        id="upi-id"
                        placeholder="enter your UPI ID"
                      />
                      <button>verify</button>
                    </div>
                    <div className="upi-method-div3">
                      <button onClick={handlePay}>pay</button>
                    </div>
                  </div>
                )}

                {/* Card Method */}
                {paymentMethod === "card" && (
                  <div className="debit-card-method">
                    <div className="card-method-div1">
                      <label htmlFor="card-id">card number</label>
                      <div className="card-input-div">
                        <input
                          type="text"
                          id="card-id"
                          inputMode="numeric"
                          placeholder="xxxx xxxx xxxx xxxx "
                        />
                        <CiCreditCard1 />
                      </div>
                    </div>
                    <div className="card-method-div2">
                      <div className="card-input-div-date">
                        <label htmlFor="card-date">Valid</label>
                        <input type="text" id="card-date" placeholder="mm/yy" />
                      </div>
                      <div className="card-input-div-date">
                        <label htmlFor="card-date">CVV</label>
                        <input type="text" id="card-date" placeholder="cvv" />
                      </div>
                    </div>
                    <div className="upi-method-div3">
                      <button onClick={handlePay}>pay</button>
                    </div>
                  </div>
                )}

                {/* Netbanking Method */}
                {paymentMethod === "netbanking" && (
                  <div className="netbanking-method">
                    <div className="netbanking-method-div1">
                      <div className="select-bank-div">
                        <div className="bank-detail">
                          <input className="bank-radio" type="radio" />
                          <h1 className="bank-name">state bank of india</h1>
                        </div>
                        <div>
                          <img
                            className="bank-logo"
                            src="/public/assets/img/pngwing.com (75).png"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="select-bank-div">
                        <div className="bank-detail">
                          <input className="bank-radio" type="radio" />
                          <h1 className="bank-name">HDFC bank</h1>
                        </div>
                        <div>
                          <img
                            className="bank-logo"
                            src="/public/assets/img/pngwing.com (76).png"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="select-bank-div">
                        <div className="bank-detail">
                          <input className="bank-radio" type="radio" />
                          <h1 className="bank-name">axis bank</h1>
                        </div>
                        <div>
                          <img
                            className="bank-logo"
                            src="/public/assets/img/pngwing.com (77).png"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="upi-method-div3">
                        <button onClick={handlePay}>pay</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* COD */}
                {paymentMethod === "cod" && (
                  <div className="cod-method">
                    <div className="cod-method-div1">
                      <p>
                        Due to handling costs, a nominal fee of ₹9 will be
                        charged
                      </p>
                    </div>
                    <div className="upi-method-div3">
                      <button onClick={handlePay}>place order</button>
                    </div>
                  </div>
                )}

                {/* Gift Card */}
                {paymentMethod === "giftcard" && (
                  <div className="giftcard-method">
                    <div className="giftcard-method-div1">
                      <p>upto 15 gift cards can be added per transaction</p>
                    </div>
                    <div className="giftcard-method-div2">
                      <div className="giftcard-input-div">
                        <label htmlFor="voucher-number">voucher number</label>
                        <input
                          type="text"
                          id="voucher-number"
                          placeholder="enter voucher number"
                        />
                      </div>
                      <div className="giftcard-input-div">
                        <label htmlFor="voucher-number">voucher pin</label>
                        <input
                          type="text"
                          id="voucher-number"
                          placeholder="enter voucher pin"
                        />
                      </div>
                    </div>
                    <div className="giftcard-method-div3">
                      <button onClick={handlePay}>add gift card</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="complete-payment-details">
              <div className="payment-details-div">
                <div className="payment-details-div1">
                  <div className="payment-details-div1-price-summary">
                    <h1>price (1 item)</h1>
                    <p>₹347</p>
                  </div>
                  <div className="payment-details-div1-price-summary">
                    <h1>delivery charges</h1>
                    <p>Free</p>
                  </div>
                  <div className="payment-details-div1-price-summary">
                    <h1>platform fees</h1>
                    <p>₹4</p>
                  </div>
                  <hr />
                  <div className="payment-total-amount">
                    <h1>total amount</h1>
                    <p>₹347</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Overlay */}
      {showAnimation && (
        <div className="overlay">
          <div className="animation-card">
            {!animationDone ? (
              <>
                <div className="truck">🚚</div>
                <h2>Placing your order...</h2>
              </>
            ) : (
              <>
                <div className="checkmark-circle">
                  <span className="checkmark">✓</span>
                </div>
                <h2>Order Placed Successfully!</h2>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentDetails;
