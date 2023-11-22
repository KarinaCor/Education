import { Routes, Route } from "react-router-dom";

import { Layout } from "./common/components/Layout/Layout";

import { Suspense, lazy } from "react";

const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Contacts = lazy(() => import("./pages/Contacts/Contacs"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const Pages = lazy(() => import("./pages/Pages/Pages"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="pages" element={<Pages />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
