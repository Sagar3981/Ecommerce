import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Pages/Home";

const PageRoutes = () => {
  const Cart = lazy(() => import("./Pages/Cart.jsx"))
  const CheckOut = lazy (() => import("./Pages/CheckOut.jsx"))
  const PaymentPage = lazy (() => import("./Pages/PaymentPage.jsx"))
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/payment-page" element={<PaymentPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
