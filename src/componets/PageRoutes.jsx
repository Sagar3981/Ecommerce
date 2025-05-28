import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Pages/Home";

const PageRoutes = () => {
  const Cart = lazy(() => import("./Pages/Cart.jsx"))
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
