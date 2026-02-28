const SiteFooter = () => {
  return (
    <footer
      id="about"
      className="border-t border-white/10 bg-white/10 backdrop-blur-xl py-12"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">

        <p className="text-sm text-white/70">
          As an Amazon Associate, I earn from qualifying purchases. Product
          prices and availability are subject to change.
        </p>

        <p className="mt-2 text-xs text-white/40">
          © {new Date().getFullYear()} DealVault. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default SiteFooter;
