import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {
  const Home = lazy(() => import("../componets/Pages/Home"));
  const ProductDetails = lazy(() =>
    import("../componets/Pages/ProductDetails.jsx")
  );
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
