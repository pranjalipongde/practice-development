import { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-white">
      <nav className="mx-auto flex max-w-277.5 items-center justify-between px-6 py-8 md:py-10 lg:px-0">
        {/* Logo */}
        <a
          href="#"
          aria-label="Shortly home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="Shortly" className="h-auto w-30.25" />
        </a>

        {/* Desktop Navigation */}
        <div className="ml-12 hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="font-poppins text-[15px] font-bold text-brand-gray-500 transition-colors hover:text-brand-gray-900 focus-visible:text-brand-gray-900"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="font-poppins text-[15px] font-bold text-brand-gray-500 transition-colors hover:text-brand-gray-900 focus-visible:text-brand-gray-900"
          >
            Pricing
          </a>

          <a
            href="#resources"
            className="font-poppins text-[15px] font-bold text-brand-gray-500 transition-colors hover:text-brand-gray-900 focus-visible:text-brand-gray-900"
          >
            Resources
          </a>
        </div>

        {/* Desktop Authentication */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
          <a
            href="#login"
            className="font-poppins text-[15px] font-bold text-brand-gray-500 transition-colors hover:text-brand-gray-900 focus-visible:text-brand-gray-900"
          >
            Login
          </a>

          <a
            href="#signup"
            className="rounded-full bg-brand-blue px-6 py-3 font-poppins text-[15px] font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline-brand-blue"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.25 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`h-0.5 w-6 bg-brand-gray-500 transition-transform duration-200 ${
              isMenuOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-brand-gray-500 transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`min-h-0.5 w-6 bg-brand-gray-500 transition-transform duration-200 ${
              isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-6 right-6 top-full rounded-[10px] bg-brand-purple px-6 py-7 shadow-lg md:hidden"
        >
          <div className="flex flex-col items-center">
            <a
              href="#features"
              onClick={closeMenu}
              className="py-3 font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-70"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={closeMenu}
              className="py-3 font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-70"
            >
              Pricing
            </a>

            <a
              href="#resources"
              onClick={closeMenu}
              className="py-3 font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-70"
            >
              Resources
            </a>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-white/20" />

            <a
              href="#login"
              onClick={closeMenu}
              className="py-3 font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-70"
            >
              Login
            </a>

            <a
              href="#signup"
              onClick={closeMenu}
              className="mt-3 w-full rounded-full bg-brand-blue py-3 text-center font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-80"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
