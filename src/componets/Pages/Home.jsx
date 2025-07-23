import Header from "../common/Header";
import CarouselComponent from "../Carousel";
import Elctronics from "../Elctronics";
import Categories from "../Categories";
import Footer from "../common/Footer";
import MostSellingProducts from "../MostSellingProducts.jsx";
import DiscountOnProducts from "../DiscountOnProducts.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <CarouselComponent />
      <Elctronics />
      <MostSellingProducts />
      <DiscountOnProducts />
      <Footer />
    </>
  );
};
export default Home;
