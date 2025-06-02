import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {
<<<<<<< HEAD
  const Loginpage = lazy(() => import("../componets/LoginPage"))
  const SubCategories = lazy(() => import("../componets/Pages/SubCategories"))
  const Profile = lazy(() => import("./Profile"))
=======
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
>>>>>>> a604835a413b68627c55e95b6c344a186b59c786
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={"<Header/>"} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/subCategories" element={<SubCategories />} />
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />} />
=======
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/loginpage" element={<Loginpage />} />
<<<<<<< HEAD

=======
          <Route path="/subCategories" element={<SubCategories />} />
          {/* <Route path="/OrderDetails" element={<OrderDetails />} /> */}
          <Route path="/StatusPage" element={<StatusPage />} />
          <Route path="/AllOrders" element={<AllOrders />} />
>>>>>>> 90503ee019493561a2e377c8c376ca3e26dd6065
>>>>>>> a604835a413b68627c55e95b6c344a186b59c786
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
