import { Star, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl
      border border-white/10
      bg-white/10 backdrop-blur-xl
      shadow-glass transition-all duration-300
      hover:shadow-glass-lg hover:-translate-y-1">

      {product.badge && (
        <span className="absolute top-3 left-3 z-10 rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/20
          px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>
      )}

      <div className="relative aspect-square overflow-hidden bg-white/5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold leading-tight text-white line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm text-white/70 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-star text-star"
                    : "text-white/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-white/60">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-white/40 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-3 flex items-center justify-center gap-2
            rounded-xl
            bg-white/20 backdrop-blur-md
            border border-white/20
            px-4 py-3 text-sm font-semibold text-white
            transition-all duration-200
            hover:bg-white/30 active:scale-[0.98]"
        >
          View Deal on Amazon
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
