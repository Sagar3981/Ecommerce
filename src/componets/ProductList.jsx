import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { useState, useEffect } from "react";
import BackEndApi from "../Utils/httpclint.js";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [wishlisted, setWishlisted] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // ✅ Extract filters from URL
  const subcategoryId = queryParams.get("subcategory");
  const categoryId = queryParams.get("category");
  const brandId = queryParams.get("brand");

  const GetingProduct = async () => {
    try {
      const response = await BackEndApi.get("/product/getallproducts");
      let products = response.data.data;

      // ✅ Apply filters
      if (subcategoryId) {
        products = products.filter(
          (item) => item.subCategory === subcategoryId
        );
      }
      if (categoryId) {
        products = products.filter((item) => item.category === categoryId);
      }
      if (brandId) {
        products = products.filter((item) => item.brand === brandId);
      }

      setProductData(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetingProduct();
  }, [subcategoryId, categoryId, brandId]);

  const toggleWishlist = async (product) => {
    const id = product._id;

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
        console.error("Error removing favorite:", error);
        alert("Something went wrong. Please try again.");
      }
      return;
    }

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
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message;

      if (status === 422) {
        alert(message || "Validation failed.");
      } else {
        alert("Something went wrong.");
      }
    }
  };

  return (
    <div className="ProductList">
      {productData.length > 0 ? (
        productData.map((row) => (
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
        ))
      ) : (
        <p style={{ textAlign: "center", padding: "20px" }}>
          No products found with selected filters.
        </p>
      )}
    </div>
  );
};

export default ProductList;
