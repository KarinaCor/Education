import { Routes, Route } from "react-router-dom";

import { Layout } from "./common/components/Layout/Layout";

import { ShopPage } from "./pages/ShopPage/ShopPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Blog } from "./pages/Blog/Blog";
import { Pages } from "./pages/Pages/Pages";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Contacts } from "./pages/Contacts/Contacs";

function App() {
  return (
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
  );
}

export default App;
