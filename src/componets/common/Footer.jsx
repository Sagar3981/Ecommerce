import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { GiFallingStar } from "react-icons/gi";
import { TfiGift } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";

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
      <div className="container copycards">
        <div className="row">
          <div className="col-lg-2 reacticons">
            <CiShop className="iconreact" />
            <h6>Become a seller</h6>
          </div>
          <div className="col-lg-2 reacticons">
            <GiFallingStar className="iconreact" />
            <h6>Advertise</h6>
          </div>
          <div className="col-lg-2 reacticons">
            <TfiGift className="iconreact" />
            <h6>gift Cards</h6>
          </div>
          <div className="col-lg-2 reacticons">
            <IoIosHelpCircleOutline className="iconreact" />
            <h6>Help Center</h6>
          </div>
          <div className="col-lg-2 reacticons">
            <h6>&copy; sagar.com</h6>
          </div>
          <div className="col-lg-2 reacticons">
            <div className="container">
              <div className="row ">
                <div className="bankcards">
                  <div>
                    <img src="assets/img/axis.jpg" className="bcards" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/sbi.png" className="bcards" alt="" />
                  </div>
                  <div>
                    <img src="assets/img/bank1.jpg" className="bcards" alt="" />
                  </div>

                  <div>
                    <img src="assets/img/axis.jpg" className="bcards" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
