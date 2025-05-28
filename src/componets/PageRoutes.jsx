import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {
  const Home = lazy(() => import("../componets/Pages/Home"));
  const Cart = lazy(() => import("./Pages/Cart.jsx"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
