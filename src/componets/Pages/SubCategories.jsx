import Header from "../common/Header";
import Filter from "../Filter"
import ProductList from "../ProductList"

const SubCategories = () => {
    return (
        <>
            <Header />
            <div className="Filter-ProductList">
                <Filter />
                <ProductList />
            </div>
        </>
    )
}
export default SubCategories