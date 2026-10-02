import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-brand-gray-950">
      <div className="mx-auto flex max-w-277.5 flex-col items-center px-6 py-12 md:flex-row md:items-start md:justify-between md:py-16 lg:px-0">
        {/* Logo */}
        <a
          href="#"
          aria-label="Shortly home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img
            src={logo}
            alt="Shortly"
            className="w-30.25 brightness-0 invert"
          />
        </a>

        {/* Footer Navigation */}
        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-16 md:mt-0 md:text-left">
          {/* Features */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Features</h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Link Shortening
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Branded Links
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Analytics
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Resources</h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Blog
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Developers
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Support
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[15px] font-bold text-white">Company</h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                About
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Our Team
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Careers
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-brand-gray-500 transition-colors hover:text-brand-blue"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex items-center gap-6 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-opacity hover:opacity-70"
          >
            <img src={facebookIcon} alt="" className="h-6 w-6" />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="transition-opacity hover:opacity-70"
          >
            <img src={twitterIcon} alt="" className="h-6 w-6" />
          </a>

          <a
            href="#"
            aria-label="Pinterest"
            className="transition-opacity hover:opacity-70"
          >
            <img src={pinterestIcon} alt="" className="h-6 w-6" />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-70"
          >
            <img src={instagramIcon} alt="" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
