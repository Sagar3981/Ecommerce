import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <div className="order-summary">
        <h2 className="product-title">
          Mega Style Mustard Seeds Solid Baby Pillow Pack of 1
        </h2>
        <div className="content">
          <div className="left-section">
            <img
              src="https://example.com/image.jpg"
              alt="Baby Pillow"
              className="product-image"
            />
            <p className="seller">Seller: SAMAKSH ENTERPRISE</p>
            <p className="price">₹229</p>

            <div className="status">
              <div className="status-item">✓ Order Confirmed, Aug 23, 2022</div>
              <div className="status-item">✓ Delivered, Aug 28, 2022</div>
            </div>

            <div className="stars">★★★★★</div>

            <button className="review-button">Add Review</button>
          </div>

          <div className="right-section">
            <div className="shipping-details">
              <h3>Shipping details</h3>
              <p className="customer-name">SAGAR</p>
              <p>
                Navaknara wada panchyathi street
                <br />
                Kondevaram, Near ambekar street
                <br />
                Pithapuram, Andhra Pradesh - 533450
              </p>
              <p className="phone">Phone: 8978585272, 8555035167</p>
            </div>

            <div className="price-details">
              <h3>Price Details</h3>
              <p>
                List Price: <s>₹599</s>
              </p>
              <p>Selling Price: ₹179</p>
              <p>Delivery Charge: ₹50</p>
              <p className="total">Total Amount: ₹229</p>
              <p className="cod">• Cash On Delivery: ₹229</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
