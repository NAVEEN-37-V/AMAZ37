import React from "react";
import ReactDOM from "react-dom/client";

import SiteHeader from "./SiteHeader";
import HeroSection from "./HeroSection";
import ProductCard from "./ProductCard";
import SiteFooter from "./SiteFooter";

function Main() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <ProductCard />
      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
