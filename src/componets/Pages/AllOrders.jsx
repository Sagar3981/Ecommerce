import Header from "../common/Header";
import Footer from "../common/Footer";

const AllOrders = () => {
  return (
    <>
      <Header />
      <div className="orders-page">
        {/* Filters Sidebar */}
        <aside className="sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>ORDER STATUS</h3>
            {["On the way", "Delivered", "Cancelled", "Returned"].map(
              (status) => (
                <label key={status}>
                  <input type="checkbox" /> {status}
                </label>
              )
            )}
          </div>

          <div className="filter-group">
            <h3>ORDER TIME</h3>
            {["Last 30 days", "2024", "2023", "2022", "2021", "Older"].map(
              (year) => (
                <label key={year}>
                  <input type="checkbox" /> {year}
                </label>
              )
            )}
          </div>
        </aside>

        {/* Orders Section */}
        <section className="orders-content">
          <div className="search-bar">
            <input type="text" placeholder="Search your orders here" />
            <button>Search Orders</button>
          </div>

          {/* Order Card */}
          <div className="order-card">
            <div className="order-header">
              <img src="/assets/img/a1.webp" alt="Product" />
              <div className="order-details">
                <div>
                  <h3>Asics COURT REFLEX Tennis Shoes For Men</h3>
                  <p className="small-text">
                    Color: Blue &nbsp;&nbsp; Size: 11
                  </p>
                </div>
                <p className="price">₹3,360</p>
                <div className="order-meta">
                  <span className="badge yellow">Refund Completed</span>
                  <p className="note">
                    You returned this order because you did not like the fit.
                  </p>
                  <button className="review-btn">
                    ★ Rate & Review Product
                  </button>
                </div>
              </div>
            </div>
            <div className="refund-info">
              <p>
                <strong>Refund Completed</strong> (Refund ID:
                12303400694632833575)
              </p>
              <p>
                The money was sent to your Bank Account linked with UPI ID
                ******4882@upi on Apr 01 06:43 PM. For any questions, please
                contact your bank with reference number 508825065121.
              </p>
            </div>
          </div>
          <div className="order-card">
            <div className="order-header">
              <img src="/assets/img/a1.webp" alt="Product" />
              <div className="order-details">
                <div>
                  <h3>Asics COURT REFLEX Tennis Shoes For Men</h3>
                  <p className="small-text">
                    Color: Blue &nbsp;&nbsp; Size: 11
                  </p>
                </div>
                <p className="price">₹3,360</p>
                <div className="order-meta">
                  <span className="badge yellow">Refund Completed</span>
                  <p className="note">
                    You returned this order because you did not like the fit.
                  </p>
                  <button className="review-btn">
                    ★ Rate & Review Product
                  </button>
                </div>
              </div>
            </div>
            <div className="refund-info">
              <p>
                <strong>Refund Completed</strong> (Refund ID:
                12303400694632833575)
              </p>
              <p>
                The money was sent to your Bank Account linked with UPI ID
                ******4882@upi on Apr 01 06:43 PM. For any questions, please
                contact your bank with reference number 508825065121.
              </p>
            </div>
          </div>
          <div className="order-card">
            <div className="order-header">
              <img src="/assets/img/a1.webp" alt="Product" />
              <div className="order-details">
                <div>
                  <h3>Asics COURT REFLEX Tennis Shoes For Men</h3>
                  <p className="small-text">
                    Color: Blue &nbsp;&nbsp; Size: 11
                  </p>
                </div>
                <p className="price">₹3,360</p>
                <div className="order-meta">
                  <span className="badge yellow">Refund Completed</span>
                  <p className="note">
                    You returned this order because you did not like the fit.
                  </p>
                  <button className="review-btn">
                    ★ Rate & Review Product
                  </button>
                </div>
              </div>
            </div>
            <div className="refund-info">
              <p>
                <strong>Refund Completed</strong> (Refund ID:
                12303400694632833575)
              </p>
              <p>
                The money was sent to your Bank Account linked with UPI ID
                ******4882@upi on Apr 01 06:43 PM. For any questions, please
                contact your bank with reference number 508825065121.
              </p>
            </div>
          </div>
          <div className="order-card">
            <div className="order-header">
              <img src="/assets/img/a1.webp" alt="Product" />
              <div className="order-details">
                <div>
                  <h3>Asics COURT REFLEX Tennis Shoes For Men</h3>
                  <p className="small-text">
                    Color: Blue &nbsp;&nbsp; Size: 11
                  </p>
                </div>
                <p className="price">₹3,360</p>
                <div className="order-meta">
                  <span className="badge yellow">Refund Completed</span>
                  <p className="note">
                    You returned this order because you did not like the fit.
                  </p>
                  <button className="review-btn">
                    ★ Rate & Review Product
                  </button>
                </div>
              </div>
            </div>
            <div className="refund-info">
              <p>
                <strong>Refund Completed</strong> (Refund ID:
                12303400694632833575)
              </p>
              <p>
                The money was sent to your Bank Account linked with UPI ID
                ******4882@upi on Apr 01 06:43 PM. For any questions, please
                contact your bank with reference number 508825065121.
              </p>
            </div>
          </div>
          <div className="order-card">
            <div className="order-header">
              <img src="/assets/img/a1.webp" alt="Product" />
              <div className="order-details">
                <div>
                  <h3>Asics COURT REFLEX Tennis Shoes For Men</h3>
                  <p className="small-text">
                    Color: Blue &nbsp;&nbsp; Size: 11
                  </p>
                </div>
                <p className="price">₹3,360</p>
                <div className="order-meta">
                  <span className="badge yellow">Refund Completed</span>
                  <p className="note">
                    You returned this order because you did not like the fit.
                  </p>
                  <button className="review-btn">
                    ★ Rate & Review Product
                  </button>
                </div>
              </div>
            </div>
            <div className="refund-info">
              <p>
                <strong>Refund Completed</strong> (Refund ID:
                12303400694632833575)
              </p>
              <p>
                The money was sent to your Bank Account linked with UPI ID
                ******4882@upi on Apr 01 06:43 PM. For any questions, please
                contact your bank with reference number 508825065121.
              </p>
            </div>
          </div>

          <div className="no-more-results">No More Results To Display</div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AllOrders;
