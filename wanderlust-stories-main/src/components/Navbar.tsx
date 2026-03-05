import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-background/90 backdrop-blur-md border-b border-border"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className={`font-display text-2xl font-bold tracking-tight ${textColor} transition-colors duration-300`}>
          Wanderlust
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`nav-link ${textColor} transition-colors duration-300`}>
            Home
          </Link>
          <Link to="/trip/santorini" className={`nav-link ${textColor} transition-colors duration-300`}>
            Santorini
          </Link>
          <Link to="/trip/kyoto" className={`nav-link ${textColor} transition-colors duration-300`}>
            Kyoto
          </Link>
          <Link to="/trip/patagonia" className={`nav-link ${textColor} transition-colors duration-300`}>
            Patagonia
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${textColor} transition-colors duration-300`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-reveal">
          <div className="flex flex-col items-center gap-6 py-8">
            <Link to="/" className="nav-link text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/trip/santorini" className="nav-link text-foreground" onClick={() => setMobileOpen(false)}>Santorini</Link>
            <Link to="/trip/kyoto" className="nav-link text-foreground" onClick={() => setMobileOpen(false)}>Kyoto</Link>
            <Link to="/trip/patagonia" className="nav-link text-foreground" onClick={() => setMobileOpen(false)}>Patagonia</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
