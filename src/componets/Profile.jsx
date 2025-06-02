import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import Header from "./common/Header"
const Profile = () => {
    return (
        <>
            <Header />
            <div className="container profile">
                <div className="row">
                    <div className="col-md-3 PeofileSideBar">
                        <div className=" FlipkartCustomer">
                            <div className="profileImg">
                                <img src="/assets/profile/profil.png" alt="" />
                            </div>
                            <div className="helloCustomer">
                                <p>Hello</p>
                                <h2>Flipkart Customer</h2>
                            </div>
                        </div>
                        <div className="oders">
                            <div className="myOder">
                                <h2> <BsFillFileEarmarkArrowUpFill className="profileIcon1" />MY ORDERS<MdKeyboardArrowRight className="arrowRight" /></h2>
                            </div>
                            <hr />
                            <div className="myOder1">
                                <h2><FaUser className="profileIcon1" /> ACCOUNT SETTINGS</h2>
                                <p>Profile Information</p>
                                <p>Manage Addresses</p>
                                <p>PAN CARD Information</p>
                            </div>
                            <hr />
                            <div className="myOder1">
                                <h2><IoMdWallet className="profileIcon1" />PAYMENTS</h2>
                                <p>Gift cards </p>
                                <p>Saved UPI</p>
                                <p>Saved Cards </p>
                            </div>
                            <hr />
                            <div className="myOder1">
                                <h2><IoMdWallet className="profileIcon1" />MY STUFF</h2>
                                <p> My Coupons </p>
                                <p>MY Reviews & Rating </p>
                                <p>All Notifications</p>
                                <p>My Wishlist</p>
                            </div>
                            <hr />
                            <div className="myOder1">
                                <h2><ImSwitch className="profileIcon1" />Logout</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-9 profileRight">
                        <div className="ProfileInformation">
                            <label htmlFor="">Personal Information <span className="edit">Edit</span></label><br />
                            <input type="text" placeholder="Flipart" />
                            <input type="text" placeholder="Customer" />
                            <button>SAVE</button>
                        </div>
                        <div className="YourGender">
                            <p>Your Gender</p>
                            <input type="radio" />
                            <label htmlFor="male">Male</label>
                            <input type="radio" />
                            <label htmlFor="male">Female</label>
                        </div>
                        <div className="EmailAddress">
                            <label htmlFor="">Email Address <span className="edit">Edit</span></label><br />
                            <input type="text" />
                        </div>
                        <div className="EmailAddress">
                            <label htmlFor="">Mobile Number <span className="edit">Edit</span></label><br />
                            <input type="text" />
                        </div>
                        <div className="FAQs">
                            <h5>FAQs</h5>
                            <div>
                                <h6>What happens when I update my email address (or mobile number)?</h6>
                                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                            </div>
                            <div>
                                <h6>When will my Flipkart account be updated with the new email address (or mobile number)?</h6>
                                <p> It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                            </div>
                            <div>
                                <h6>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h6>
                                <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                            </div>
                            <div>
                                <h6>Does my Seller account get affected when I update my email address?</h6>
                                <p> Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also</p>
                            </div>
                        </div>
                        <div>
                            <h6 className="Deactivate">Deactivate Account </h6>
                            <h6 className="Delete">Delete Account</h6>
                        </div>
                        <div className=" profileSecImg">
                            <img src="/assets/profile/myProfileFooter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile