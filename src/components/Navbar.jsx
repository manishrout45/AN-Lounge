import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
  ];

  const rightNavItems = [
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const NavItem = ({ item, exact }) => (
    <li className="flex flex-col items-center">
      <NavLink
        to={item.path}
        end={exact}
        className={({ isActive }) =>
          `transition-colors duration-300 ${
            isActive ? "text-[#daceba]" : "text-white"
          } hover:text-[#daceba]`
        }
      >
        {item.name}
      </NavLink>

      {/* ICON SLOT (NO LAYOUT SHIFT) */}
      <div className="h-4 mt-2">
        <NavLink to={item.path} end={exact}>
          {({ isActive }) =>
            isActive ? (
              <img
                src="/assets/icons/comb.png"
                alt="active indicator"
                className="h-4 w-auto"
              />
            ) : null
          }
        </NavLink>
      </div>
    </li>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">

        {/* MOBILE LOGO */}
        <Link to="/" className="md:hidden">
          <img
            src="/assets/images/AN_LOGO_png.png"
            alt="AN Lounge Logo"
            className="h-12"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-16 mx-auto">

          {/* LEFT MENU */}
          <ul className="flex items-center gap-8 font-medium">
            {leftNavItems.map((item, idx) => (
              <NavItem key={idx} item={item} exact={item.path === "/"} />
            ))}
          </ul>

          {/* LOGO */}
          <Link to="/">
            <img
              src="/assets/images/AN_LOGO_png.png"
              alt="AN Lounge Logo"
              className="h-16"
            />
          </Link>

          {/* RIGHT MENU */}
          <ul className="flex items-center gap-8 font-medium">
            {rightNavItems.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}

            <button className="border px-4 py-1 border-white text-white rounded hover:bg-white/20 transition">
              Book Now
            </button>
          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img
            src="/assets/images/AN_LOGO_png.png"
            alt="AN Lounge Logo"
            className="h-10"
          />
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        <div className="px-6 space-y-6 mt-6">
          {[...leftNavItems, ...rightNavItems].map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive ? "text-[#daceba]" : "text-black"
                } hover:text-[#daceba]`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
