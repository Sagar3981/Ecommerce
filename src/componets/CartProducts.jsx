import { MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import BackEndApi from "../Utils/httpclint.js";
import { useState, useEffect } from "react";

const CartProducts = () => {
  const [productData, setProductData] = useState([]);

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

  const IncButton = (index) => {
    const updatedData = [...productData];
    updatedData[index].quantity += 1;
    setProductData(updatedData);
  };

  const DecButton = (index) => {
    const updatedData = [...productData];
    if (updatedData[index].quantity > 1) {
      updatedData[index].quantity -= 1;
      setProductData(updatedData);
    }
  };

  const handleRemove = (index) => {
    const updatedData = productData.filter((_, i) => i !== index);
    setProductData(updatedData);
  };

  const formatCurrency = (amount) => `₹${amount.toFixed(2)}`;

  const totalItems = productData.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = productData.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const totalDiscount = productData.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const discountPercent = parseFloat(item.discount);
    const discountAmount = (price * discountPercent) / 100;
    return sum + discountAmount * item.quantity;
  }, 0);

  const totalAmount = totalPrice - totalDiscount + 9;

  return (
    <div className="total-div">
      <div className="cart-container">
        <div className="set-pincode">
          <p>from saved address</p>
          <button>enter delivery pincode</button>
        </div>

        <div className="cart-products">
          {productData.map((row, index) => {
            const price = parseFloat(row.price);
            const discountPercent = parseFloat(row.discount);
            const discountValue = (price * discountPercent) / 100;
            const totalDiscountValue = discountValue * row.quantity;
            const discountedPrice = (price - discountValue) * row.quantity;

            return (
              <div className="cart-single-product" key={index}>
                <div className="cart-product-top-row">
                  <div className="cart-product-image-div">
                    <img
                      className="cart-product-image"
                      src="/public/assets/img/xl-fms-181-fllseve-pop-ol-force-original-imah459zhrvvjp4m.webp"
                      alt="product"
                    />
                  </div>
                  <div className="cart-product-detils">
                    <h1 className="cart-product-name">
                      {row.productName} + {row.description}
                    </h1>
                    <h1 className="cart-product-size">Size: L</h1>
                    <h1 className="cart-product-seller">Seller:AwesomefabShoppingPvt</h1>
                    <div className="cart-product-price">
                      <p className="product-price">₹{price}</p>
                      <p className="discount-price">{formatCurrency(discountedPrice)}</p>
                      <p className="discount-off">
                        You save {formatCurrency(totalDiscountValue)}
                      </p>
                      <p className="availabile-offers">2-offers-available</p>
                    </div>
                  </div>
                  <div className="delivery-date">
                    <p>Delivery by Mon Jun 2</p>
                  </div>
                </div>

                <div className="cart-product-buttons">
                  <div className="quantity-of-product">
                    <button className="minus-button" onClick={() => DecButton(index)}>-</button>
                    <button className="minus-button">{row.quantity}</button>
                    <button className="plus-button" onClick={() => IncButton(index)}>+</button>
                  </div>
                  <div className="save-remove">
                    <button>save for later</button>
                    <button onClick={() => handleRemove(index)}>remove</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="place-order">
          <Link to="/checkout">
            <button>place order</button>
          </Link>
        </div>
      </div>

      <div className="price-container">
        <div className="price-container-sticky">
          <div className="cart-price-details">
            <h1>price details</h1>
            <hr />
          </div>
          <div className="price-summary">
            <div className="price-summary-1">
              <p>Price ({totalItems} items)</p>
              <p>{formatCurrency(totalPrice)}</p>
            </div>
            <div className="price-summary-1">
              <p>Discount</p>
              <p className="price-itmes">− {formatCurrency(totalDiscount)}</p>
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
              <p>{formatCurrency(totalAmount)}</p>
            </div>
            <hr />
            <div>
              <p className="you-save">
                You will save {formatCurrency(totalDiscount)} on this order
              </p>
            </div>
          </div>
          <div className="verify-div">
            <MdVerifiedUser className="MdVerifiedUser-icon" />
            <p>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
