import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { assets } from "../assets/asset";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();

  const navItems = [
    { label: "Home", slug: "home" },
    { label: "About US", slug: "about-us" },
    { label: "How it Works", slug: "how-it-works" },
    { label: "Contact US", slug: "contact-us" },
    // { label: "Connect Wallet", slug: "connect-wallet" },
  ];

  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "home";
    setActiveItem(currentPath);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavClick = (slug: string) => {
    setActiveItem(slug);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent h-[60px] sm:h-[64px]">
      {/* <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm h-[60px] sm:h-[64px]"> */}
      <nav className="max-w-8xl mx-auto flex items-center justify-between h-full px-3 sm:px-5 md:px-6 lg:px-10 xl:px-12 relative">
        <div className="absolute bottom-0 left-0 w-full h-[1px] border-gradient hidden xl:block"></div>
        <div className="flex items-center h-full">
          <Link to="/">
            <img src={assets.Logo} alt="Logo" className="h-7 sm:h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex gap-10 text-light font-medium h-full">
          {navItems.map((item) => (
            <li
              key={item.slug}
              className="relative h-full flex items-center group text-[13px] sm:text-[14px]"
            >
              <Link
                to={item.slug === "home" ? "/" : `/${item.slug}`}
                onClick={() => handleNavClick(item.slug)}
                className={`group relative flex flex-col justify-center px-4 font-semibold ${
                  activeItem === item.slug
                    ? "text-light nav-gradient-back h-full px-10"
                    : "text-light nav-gradient py-3"
                } hover:text-[#ff0c10]`}
              >
                {item.label}

                {activeItem === item.slug && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white z-10"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/connect-wallet"
          className="gradient-bg text-black text-[13px] font-bold px-6 py-2 hover:opacity-90 transition-all duration-300 hidden xl:block"
        >
          CONNECT WALLET
        </a>

        <div className="xl:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-black z-40 transition-transform duration-300 ease-in-out xl:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-8 pt-5">
            <FaTimes
              className="text-white text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <div className="flex flex-col justify-center items-center h-full space-y-8 text-white">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                to={item.slug === "home" ? "/" : `/${item.slug}`}
                onClick={() => handleNavClick(item.slug)}
                className={`text-lg ${
                  activeItem === item.slug ? "text-pink-500" : "text-white"
                } hover:text-orange-400`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/connect-wallet"
              className="gradient-bg text-black text-sm font-bold px-8 py-2 rounded-sm hover:opacity-90 transition-all duration-300"
            >
              CONNECT WALLET
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
