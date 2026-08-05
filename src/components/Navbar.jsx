import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check Login Status
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [location]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUser(null);

    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Notes", path: "/notes" },
    { name: "Courses", path: "/courses" },
    { name: "Syllabus", path: "/syllabus" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/20"
          : "bg-gray-900/90 backdrop-blur-lg border-b border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link to="/" className="select-none">
            <h1
              className="text-[46px] font-bold leading-none bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Literata', serif" }}
            >
              StudyHub
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item.name}

                {location.pathname === item.path && (
                  <span className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-orange-400"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-lg border border-gray-700 text-gray-200 hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-gray-200 font-medium">
                👋 {user?.name}
              </span>

              <button
                onClick={handleLogout}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={`transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-400 font-semibold"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <hr className="border-gray-700" />

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 py-3 text-center font-semibold text-white shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <span className="text-white font-semibold text-center">
                  👋 {user?.name}
                </span>

                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenu(false);
                  }}
                  className="rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 py-3 text-white font-semibold shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}