import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { useState, useEffect } from "react";
import BackEndApi from "../Utils/httpclint.js";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [wishlisted, setWishlisted] = useState([]);

  const GetingProduct = async () => {
    try {
      const response = await BackEndApi.get("/product/getallproducts", wishlisted);
      setProductData(response.data.data);
      console.log("products data", response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetingProduct();
  }, []);

  // Toggle wishlist
  const toggleWishlist = async (product) => {
    const id = product._id;

    setWishlisted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    const payload = {
      productId: product._id,
      productName: product.productName,
      price: product.price
    };

    try {
      const response = await BackEndApi.post("/favorite/add-Favorite", payload);
      // alert("Product saved successfully");
      console.log("Favorite response:", response.data);
    } catch (error) {
      console.error("Error saving favorite:", error);
    }
  };


  return (
    <div className="ProductList">
      {productData.map((row) => (
        <div className="Product-List" key={row._id}>
          <IoIosHeart
            className="wishlistIcon"
            onClick={() => toggleWishlist(row)}

            style={{
              color: wishlisted[row._id] ? "red" : "gray",
              cursor: "pointer",
            }}
          />
          <Link to={`/ProductDetails/${row._id}`}>
            <div className="watch1Img">
              <img src="/assets/SubCategoriesImgs/watch1.png" alt="" />
            </div>
            <div className="whatchColors">
              <p className="color1"></p>
              <p className="color2"></p>
              <p className="color3"></p>
              <p className="color4"></p>
              <p className="color5"></p>
            </div>
            <h6>{row.productName}</h6>
            <p>{row.colors}</p>
            <p>
              <span>
                4.8 <IoMdStar />
              </span>{" "}
              (75)
            </p>
            <h5>
              <LiaRupeeSignSolid />
              3,299{" "}
              <span className="crosingPrice">
                <LiaRupeeSignSolid />
                9,999
              </span>
              <span className="off">65% off</span>
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
