import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {

  const Home = lazy(() => import("../componets/Pages/Home.jsx"));
  const Cart = lazy(() => import("../componets/Pages/Cart.jsx"));
  const SubCategories = lazy(() =>
    import("../componets/Pages/SubCategories.jsx")
  );
  const ProductDetails = lazy(() =>
    import("../componets/Pages/ProductDetails.jsx")
  );
  const Loginpage = lazy(() => import("../componets/LoginPage.jsx"));
  const PaymentPage = lazy(() => import("./Pages/PaymentPage.jsx"));
  const CheckOut = lazy(() => import("./Pages/CheckOut.jsx"));
  const StatusPage = lazy(() => import("./Pages/StatusPage.jsx"));
  const AllOrders = lazy(() => import("../componets/Pages/AllOrders.jsx"));
  const OrderDetails = lazy(() => import("./MyorderStatus.jsx"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/subCategories" element={<SubCategories />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/StatusPage" element={<StatusPage />} />
          <Route path="/AllOrders" element={<AllOrders />} />
          <Route path="/OrderDetails" element={<OrderDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
