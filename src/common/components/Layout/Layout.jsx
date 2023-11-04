import { Link, Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { HeroSection } from "../HeroSection/HeroSection";

export const Layout = () => {
  
  return (
    <>
      <Header />
      <HeroSection />

      <Outlet fallback={null} />
      <Footer />
    </>
  );
};
