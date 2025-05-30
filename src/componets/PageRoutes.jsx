import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Pages/Home";

const PageRoutes = () => {
  const ProductDetails = lazy(() =>
    import("../componets/Pages/ProductDetails.jsx")
  );
  const AllOrders = lazy(() => import("./Pages/AllOrders.jsx"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/MyOrders" element={<AllOrders />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
