import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container-fluid footercard">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-2 footerheadings">
          <h5>About Us</h5>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-2 footerheadings">
          <h5>Help</h5>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-2 footerheadings">
          <h5>Consumer Policy</h5>
          <ul>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-2 footerheadings">
          <h5>Social Links</h5>
          <ul className="social-icons">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <IoLogoYoutube />
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-2 footerheadings">
          <h5>Registered Office</h5>
          <div>
            <p>
              2nd Floor, Sangeeth Sagar Complex, D.No: 12-5-1, opp. Titan
              Showroom, <br />
              beside KFC, Kakinada, Andhra Pradesh 533001
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
