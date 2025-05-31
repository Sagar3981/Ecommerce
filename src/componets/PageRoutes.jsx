import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Pages/Home";

const PageRoutes = () => {
  const Loginpage = lazy(() => import("../componets/LoginPage"))
  const SubCategories = lazy(() => import("../componets/Pages/SubCategories"))
  const Profile = lazy(() => import("./Profile"))
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/subCategories" element={<SubCategories />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
