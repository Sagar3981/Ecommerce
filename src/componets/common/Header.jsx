import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 headercard">
          <img src="assets/img/logo.png" alt="Logo" className="logo" />
          <div className="searchcard">
            <i className="bi bi-house homeicon"></i>
            <div className="searchcontainer">
              <input type="text" placeholder="Serach your product here " />
              <i className="bi bi-search"></i>
            </div>

            <div className="dropdown hover-or-click">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="loginDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person me-2"></i> Login
              </button>
              <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    New User? Register
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My Orders
                  </a>
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

          <div>
            <div className="cartbag">
              <button className="btn btn-success">
                <i className="bi bi-shop me-2"></i> Become a Seller
              </button>

              <div className="cart-wrapper">
                <Link to="/cart">
                  <i className="bi bi-cart homeicon"></i>
                </Link>
                <span className="cart-badge">3</span>{" "}
                {/* dynamic count goes here */}
              </div>

              {/* <i className="bi bi-bag-check homeicon"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
