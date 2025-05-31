import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {
  const ProductDetails = lazy(() =>
    import("../componets/Pages/ProductDetails.jsx")
  );
  const Home = lazy(() => import("../componets/Pages/Home.jsx"));
  const Cart = lazy(() => import("../componets/Pages/Cart.jsx"));
  const Loginpage = lazy(() => import("../componets/LoginPage.jsx"));
  const SubCategories = lazy(() =>
    import("../componets/Pages/SubCategories.jsx")
  );
  const AllOrders = lazy(() => import("../componets/Pages/AllOrders.jsx"));
  const CheckOut = lazy(() => import("./Pages/CheckOut.jsx"));
  const PaymentPage = lazy(() => import("./Pages/PaymentPage.jsx"));
  const OrderDetails = lazy(() => import("./MyorderStatus.jsx"));
  const Header = lazy(() => import("../componets/common/Header.jsx"));
  const StatusPage = lazy(() => import("./Pages/StatusPage.jsx"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={"<Header/>"} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/subCategories" element={<SubCategories />} />
          {/* <Route path="/OrderDetails" element={<OrderDetails />} /> */}
          <Route path="/StatusPage" element={<StatusPage />} />
          <Route path="/AllOrders" element={<AllOrders />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
