import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

import { LogoAperture } from "./LogoAperture";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-(--gold)/20 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/80"
          : "bg-transparent"
      }`}
    >
      <nav>
        <Container className="flex h-20 items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={handleLinkClick}
          >
            <LogoAperture />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium capitalize text-white/80 transition-colors duration-300 hover:text-(--gold)"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-(--gold) transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Call Button */}
          <div className="hidden md:block">
            <Button href="tel:+918298422602" variant="primary">
              <Phone size={15} />
              <span>Call Now</span>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl transition-all hover:bg-(--gold) hover:text-black active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </Container>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-(--gold)/15 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <Container className="flex flex-col gap-2 py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.2 }}
                  className="block w-full border-b border-white/10 px-3 py-4 text-base font-medium tracking-wide text-white/90 transition-colors hover:text-(--gold) hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.2 }}
                className="pt-4"
              >
                <Button
                  href="tel:+918298422602"
                  variant="primary"
                  onClick={handleLinkClick}
                  className="w-full"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
