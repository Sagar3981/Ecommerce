import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./componets/Categories";

import Header from "./componets/common/Header";
import CarouselComponent from "./componets/Carousel";
import Elctronics from "./componets/Elctronics";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <CarouselComponent />
      <Elctronics />
    </>
  );
}

export default App;
