import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { useState, useEffect } from "react";
import BackEndApi from "../Utils/httpclint.js";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [wishlisted, setWishlisted] = useState({}); // id -> favoriteId

  const GetingProduct = async () => {
    try {
      const response = await BackEndApi.get("/product/getallproducts");
      setProductData(response.data.data);
      console.log("products data", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetingProduct();
  }, []);

  const toggleWishlist = async (product) => {
    const id = product._id;

    // If already in wishlist → remove it
    if (wishlisted[id]) {
      try {
        const response = await BackEndApi.delete(
          `/favorite/delete-Favorite-item/${wishlisted[id]}`
        );

        if (response.status === 200) {
          alert("Product removed from favorites.");
          setWishlisted((prev) => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
          });
        }
      } catch (error) {
        console.error(
          "Error removing favorite:",
          error.response?.data || error.message
        );
        alert("Something went wrong. Please try again.");
      }
      return;
    }

    // Else, add to wishlist
    const payload = {
      productId: product._id,
      productName: product.productName,
      price: product.price,
      discountPrice: product.discountPrice,
    };

    try {
      const response = await BackEndApi.post("/favorite/add-Favorite", payload);
      const favoriteItem = response.data.data;

      if (response.status === 200) {
        alert("This product is already in your favorites.");
      } else if (response.status === 201) {
        alert("Product added to favorites successfully!");
      }

      setWishlisted((prev) => ({
        ...prev,
        [id]: favoriteItem._id,
      }));

      console.log("Favorite response:", favoriteItem);
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message;

      if (status === 422) {
        alert(
          message || "Validation failed. Please check the product details."
        );
      } else {
        alert("Something went wrong. Please try again.");
      }

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
              {row.discountPrice}
              <span className="crosingPrice">
                <LiaRupeeSignSolid />
                {row.price}
              </span>
              <span className="off">{row.discount}% off</span>
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
