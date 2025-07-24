import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter"
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { MdDelete } from "react-icons/md";
const Wishlist = () => {
    return (
        <>
            <CartHeader />
            <div className="WishlistCard ">
                <div className=" PeofileSideBar1">
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
                <div className="MyWishlist">
                    <div>
                        <h2>My Wishlist (20)</h2>
                    </div>
                    <div className="MyWishlistImg">
                        <img src="/public/assets/img/boult-earpods.jpg" alt="" />
                        <div>
                            <h6>Women Regular Fit Light Blue Georgette Trousers</h6>
                            <p>Price: Not Available</p>
                        </div>
                        <MdDelete className="deleteIcon" />
                    </div>

                </div>
            </div>

            <CartFooter />
        </>
    )
}
export default Wishlist