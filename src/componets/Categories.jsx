import { useEffect, useState } from "react";
import BackEndApi from "../Utils/httpclint";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoryproduct, setCategoryproduct] = useState([]);

  const GetCategory = async () => {
    try {
      const response = await BackEndApi.get("/category/all-categories");
      setCategoryproduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <>
      <div className="container-fluid CategoriesConFluid">
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-sm-12 categories">
            {categoryproduct.map((row) => (
              <Link to={`/allSubCategories?category=${row._id}`} key={row._id}>
                <div className="topcategoriesitemscard">
                  <img src="assets/img/mobile.webp" alt="" />
                  <h6 className="phoneName">{row.category}</h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
