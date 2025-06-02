const CartHeader = () =>{
    return(
        <>
        <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 cart-headercard">
          <img src="assets/img/logo.png" alt="Logo" className="logo" />
          <div className="searchcard">
            <i className="bi bi-house homeicon"></i>
            <div className="searchcontainer">
              <input type="text" placeholder="Serach your product here " />
              <i className="bi bi-search"></i>
            </div>
          </div>
          <div className="dropdown hover-or-click">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="loginDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MyAccount
              </button>
              <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Notifications
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
      </div>
    </div>
        </>
    )
}

export default CartHeader