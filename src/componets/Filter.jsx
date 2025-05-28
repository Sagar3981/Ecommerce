import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
const Filter = () => {
    return (
        <>
            <div className="Filters">
                <div className="filter">
                    <h5>Filters</h5>
                </div>
                <hr />
                <div className="filterCategories">
                    <h6>CATEGORIES</h6>
                </div>
                <hr />
                <div className="price">
                    <h6>PRICE</h6>
                    <div className="minPrice">
                        <select name="" id="">
                            <option value="">Min</option>
                            <option value="">600</option>
                            <option value="">1000</option>
                            <option value="">1500</option>
                            <option value="">2000</option>
                            <option value="">3000</option>
                            <option value="">4000</option>
                            <option value="">5000</option>
                            <option value="">6000+</option>
                        </select>
                        <select name="" id="">
                            <option value="">600</option>
                            <option value="">1000</option>
                            <option value="">1500</option>
                            <option value="">2000</option>
                            <option value="">3000</option>
                            <option value="">4000</option>
                            <option value="">5000</option>
                            <option value="">6000+</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>HEADPHONE TYPE</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>In the Ear</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>On the Ear</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>True Wireless</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>CONECTIVITY</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Bluetooth</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Bluetooth & Wired</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Wired</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>CUSTOMER RATINGS</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>4<span><MdOutlineStar /></span> Above</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>3<span><MdOutlineStar /></span> Above</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>2<span><MdOutlineStar /></span> Above</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>1<span><MdOutlineStar /></span> Above</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>BRAND</h6>
                    <div className="BRANDsearch">
                        <IoIosSearch />
                        <input type="text" placeholder="Search Brand" />
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>boAt</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>OnePlus</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>realme</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Boult</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>SONY</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>CMF by Nothing</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>DISCOUNT</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>50% or more</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>40% or more</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>30% or more</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>20% or more</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>10% or more</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>FEATURES</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Deep Bass</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Fast Charging</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>FoldableCollapsible</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Noise cancellation</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>True Wireless</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Water Resistant</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>HEADPHONE DESIGN</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Behind the Neck</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Earbud</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Earwings</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Foldable Over the Head</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Over the Head</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>COLOR </h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Beige</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Black</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Blue</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Brown</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Gold</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Green</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Grey</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Maroon</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Pink</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Purple</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Red</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Silver</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>White</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>OFFER</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Buy More,Save More</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Special Price</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>AVAILABLITY</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Include Out of Stock</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>GST INVOICE AVAILABLE</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>GST invoice Available</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6>NEW ARRIVALS</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>New Arrivals</h5>
                    </div>
                </div>
                <hr />
                <div className="HeadphoneType">
                    <h6> COMPATIBLE WITH</h6>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5> Audio Player</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5> Desktop</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5> Gaming Console</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Laptop</h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Mobile </h5>
                    </div>
                    <div className="Headphone-Type">
                        <MdCheckBoxOutlineBlank />
                        <h5>Tablet</h5>
                    </div>

                </div>
                <hr />
            </div>
        </>
    )
}
export default Filter