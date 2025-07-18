import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BackEndApi from "../Utils/httpclint.js";
const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const GetingProduct = async () => {
    try {
      const response = await BackEndApi.get("/product/getallproducts");
      setProductData(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetingProduct();
  }, []);
  return (
    <>
      <div className="ProductList">
        {productData.map((row) => (
          <Link to={`/ProductDetails/${row._id}`} key={row._id}>
            <motion.div
              className="Product-List"
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ duration: 0.9 }}
            >
              <IoIosHeart className="wishlistIcon" />
              <div className="watch1Img">
                <motion.img src="/assets/SubCategoriesImgs/watch1.png" alt="" />
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
                  4.8
                  <IoMdStar />
                </span>
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
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default ProductList;
