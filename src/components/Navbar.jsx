import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
          `text-sm font-medium transition ${
            isActive ? "text-[#daceba]" : "text-white"
          } hover:text-[#daceba]`
        }
      >
        {item.name}
      </NavLink>

      <div className="h-4 mt-1">
        <NavLink to={item.path} end={exact}>
          {({ isActive }) =>
            isActive ? (
              <img
                src="/assets/icons/comb.png"
                alt="active"
                className="h-4"
              />
            ) : null
          }
        </NavLink>
      </div>
    </li>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${
          scrolled ? "bg-black/90 shadow-lg" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* MOBILE LOGO */}
          <Link to="/" className="md:hidden">
            <img
              src="/assets/images/AN_LOGO_png.png"
              alt="Logo"
              className="h-12"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-14 mx-auto">

            <ul className="flex gap-8">
              {leftNavItems.map((item, i) => (
                <NavItem key={i} item={item} exact={item.path === "/"} />
              ))}
            </ul>

            <Link to="/">
              <img
                src="/assets/images/AN_LOGO_png.png"
                alt="Logo"
                className="h-16"
              />
            </Link>

            <ul className="flex gap-8">
              {rightNavItems.map((item, i) => (
                <NavItem key={i} item={item} />
              ))}
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
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-[10001] transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img
            src="/assets/images/AN_LOGO_png.png"
            alt="Logo"
            className="h-10"
          />
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        <div className="px-6 mt-6 space-y-6">
          {[...leftNavItems, ...rightNavItems].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive ? "text-[#daceba]" : "text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[10000]"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
