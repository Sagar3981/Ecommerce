import Header from "../common/Header";
import Filter from "../Filter"
import ProductList from "../ProductList"
import Footer from "../common/Footer";

const SubCategories = () => {
    return (
        <>
            <Header />
            <div className="Filter-ProductList">
                <Filter />
                <ProductList />
            </div>
            <Footer />
        </>
    )
}
export default SubCategories