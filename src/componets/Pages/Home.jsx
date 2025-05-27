import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../common/Header";
import CarouselComponent from "../Carousel";
import Elctronics from "../Elctronics";
import Categories from "../Categories";
const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <CarouselComponent />
      <Elctronics />
    </>
  );
};
export default Home;
