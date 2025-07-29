import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import BackEndApi from "../Utils/httpclint";
import { useEffect, useState } from "react";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    const GetWishlist = async () => {
        try {
            const response = await BackEndApi.get("/favorite/get-All-Favorites");
            setWishlist(response.data.data);
            console.log("Wishlist:", response.data.data);
        } catch (error) {
            console.log("Error fetching wishlist:", error);
        }
    };

    const handleRemove = async (id) => {
        try {
            await BackEndApi.delete(`/favorite/delete-Favorite-item/${id}`);
            setWishlist((prev) => prev.filter((item) => item._id !== id));
        } catch (error) {
            console.log("Delete Error:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        GetWishlist();
    }, []);

    return (
        <>
            <CartHeader />

            <div className="WishlistCard">
                <div className="PeofileSideBar1">
                    <div className="FlipkartCustomer">
                        <div className="profileImg">
                            <img src="/assets/profile/profil.png" alt="Profile" />
                        </div>
                        <div className="helloCustomer">
                            <p>Hello</p>
                            <h2>Flipkart Customer</h2>
                        </div>
                    </div>

                    <div className="oders">
                        <div className="myOder">
                            <h2>
                                <BsFillFileEarmarkArrowUpFill className="profileIcon1" />
                                MY ORDERS
                                <MdKeyboardArrowRight className="arrowRight" />
                            </h2>
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
                            <p>Gift cards</p>
                            <p>Saved UPI</p>
                            <p>Saved Cards</p>
                        </div>
                        <hr />
                        <div className="myOder1">
                            <h2><IoMdWallet className="profileIcon1" />MY STUFF</h2>
                            <p>My Coupons</p>
                            <p>MY Reviews & Rating</p>
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
                        <h2>My Wishlist ({wishlist.length})</h2>
                    </div>

                    {wishlist.map((row) => (
                        <div className="MY-Wishlist" key={row._id}>
                            <div className="MyWishlistImg">
                                <img src="/assets/img/boult-earpods.jpg" alt="Product" />
                                <div>
                                    <h6>{row.productName}</h6>
                                    <p>price: ₹{row.discountPrice}</p>
                                </div>
                            </div>
                            <MdDelete
                                className="deleteIcon"
                                onClick={() => handleRemove(row._id)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <CartFooter />
        </>
    );
};

export default Wishlist;
