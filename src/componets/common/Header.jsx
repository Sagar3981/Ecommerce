import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import BackEndApi from "../../Utils/httpclint";
import { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";

const Header = () => {
  const [productData, setProductData] = useState([]);
  const [wishlist, setWishlist] = useState([])
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
  const GetingWishlist = async () => {
    try {
      const response = await BackEndApi.get("/favorite/get-All-Favorites");
      const withQuantity = response.data.data.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setWishlist(withQuantity);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetingProduct();
    GetingWishlist();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 headercard">
            <Link to="/">
              <img src="/assets/img/logo.png" alt="Logo" className="logo" />
            </Link>

            <div className="searchcard">
              <i className="bi bi-house homeicon"></i>
              <div className="searchcontainer">
                <input type="text" placeholder="Search your product here" />
                <i className="bi bi-search"></i>
              </div>

              <div className="dropdown hover-or-click">
                <Link to="/loginpage">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="loginDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person me-2"></i> Login
                  </button>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      New User? Register
                    </a>
                  </li>
                  <li>
                    <Link to="/AllOrders">
                      <span className="dropdown-item">My Orders</span>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cartbag">
              <button className="btn btn-success">
                <i className="bi bi-shop me-2"></i> Become a Seller
              </button>
              <div>
                <Link to="/Wishlist">
                  <BsHeart className="heartIcon" />
                  <span className="cart-badge1">{wishlist.length}</span>
                </Link>
              </div>
              <div className="cart-wrapper">
                <Link to="/cart">
                  <FaCartShopping className="cartIcon" />
                  <span className="cart-badge">{productData.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
