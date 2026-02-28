import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import SiteFooter from "@/components/SiteFooter";
import { products, categories } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-background">

      <SiteHeader />
      <HeroSection />

      <main id="deals" className="mx-auto w-full max-w-6xl px-4 py-12">

        {/* Glass Category Buttons */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium
                backdrop-blur-xl border transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-white/20 border-white/30 text-white shadow-glass"
                    : "bg-white/10 border-white/10 text-white/70 hover:bg-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-white/60">
            No products in this category yet.
          </p>
        )}
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
