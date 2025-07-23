import Header from "../common/Header";
import Footer from "../common/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackEndApi from "../../Utils/httpclint";

const AllSubCategories = () => {
    const [allSubcategory, setAllSubCategory] = useState([]);

    // Get category ID from URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("category");

    const GetAllSubCategory = async () => {
        try {
            const response = await BackEndApi.get("/subcategory/get-all-subcategories");
            const filtered = response.data.data.filter(
                (item) => item.categoryId === categoryId
            );
            setAllSubCategory(filtered);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (categoryId) {
            GetAllSubCategory();
        }
    }, [categoryId]);

    return (
        <>
            <Header />
            <div className="AllSubCategories">
                {allSubcategory.length > 0 ? (
                    allSubcategory.map((row) => (
                        <div className="allPhones" key={row._id}>
                            <img
                                src="/assets/SubCategoriesImgs/phoneImg-removebg-preview.png"
                                alt=""
                            />
                            <h2 className="allphoneName">{row.subCategory}</h2>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", padding: "20px" }}>
                        No subcategories found for this category.
                    </p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default AllSubCategories;
