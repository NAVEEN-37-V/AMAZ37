import { ShoppingBag } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl
                          bg-white/20 backdrop-blur-lg
                          border border-white/20
                          shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-semibold tracking-tight text-white">
            DealVault
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          <a
            href="#deals"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Deals
          </a>

          <a
            href="#about"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            About
          </a>
        </nav>

      </div>
    </header>
  );
};

export default SiteHeader;
