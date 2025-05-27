import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Pages/Home";

const PageRoutes = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default PageRoutes;
