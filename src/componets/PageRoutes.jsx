import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const PageRoutes = () => {
  const Home = lazy(() => import("../componets/Pages/Home"));
  const Cart = lazy(() => import("./Pages/Cart.jsx"));
  const ProductDetails = lazy(() =>
    import("../componets/Pages/ProductDetails.jsx")
  );
  const Loginpage = lazy(() => import("../componets/LoginPage"));
  const SubCategories = lazy(() => import("../componets/Pages/SubCategories"));
  const OrderDetails = lazy(() => import("./MyorderStatus.jsx"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/subCategories" element={<SubCategories />} />
          <Route path="/OrderDetails" element={<OrderDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
