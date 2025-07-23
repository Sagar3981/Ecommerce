import { Link } from "react-router-dom";

const CheckOutHeader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="checkout-header">
            <Link to="/">
              <img src="assets/img/logo.png" alt="Logo" className="logo" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckOutHeader;
