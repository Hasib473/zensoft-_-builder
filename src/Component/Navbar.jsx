import React, { useState, useEffect } from "react";
import logo from "../assets/Logo WIthout BG.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Service" },
    { to: "/themes", label: "Themes" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/aboutus", label: "About Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-[#EEF3FF]/90 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" aria-label="Zensoft Builders Home">
              <img
                src={logo}
                alt="Zensoft Builders Logo"
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <ul className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-blue-200 shadow-sm">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? " text-blue-500 "
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <NavLink to="/contact">
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Navigate to contact page"
              >
                Let's Connect
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg">
          <ul className="space-y-1" role="menu">
            {navLinks.map(({ to, label }) => (
              <li key={to} role="menuitem">
                <NavLink
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2" role="menuitem">
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                  Let's Connect
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
