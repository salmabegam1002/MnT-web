import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/mntlogo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-border/20 shadow-premium"
          : "bg-transparent"
          }`}
      >
        <div className="w-full max-w-enterprise mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20 md:h-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <Link to="/" className="relative z-10 flex items-center">
              <img src={logo} alt="MNT Future" className="h-7 md:h-9 w-auto" />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Link
                  to={link.href}
                  className={`relative text-[13px] uppercase tracking-wider font-semibold transition-colors line-reveal ${location.pathname === link.href
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="hidden lg:flex magnetic-btn text-[11px] font-bold uppercase tracking-widest px-8 py-2.5"
            >
              <span>Get Started</span>
            </Link>
          </motion.div>

          <motion.button
            className="lg:hidden relative z-10 p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden"
          >
            {/* Immersive Background */}
            <div
              className="absolute inset-0 bg-white/90 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 w-full md:max-w-md bg-white shadow-2xl flex flex-col pt-6 pb-12 px-8 overflow-y-auto"
            >
              {/* Branded Header */}
              <div className="flex items-center justify-between mb-12">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                >
                  <img src={logo} alt="MNT Future" className="h-8 w-auto" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                    className="w-full"
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-3xl font-display font-bold transition-all relative group ${location.pathname === link.href
                        ? "text-primary translate-x-3"
                        : "text-slate-800 hover:text-primary hover:translate-x-3"
                        }`}
                    >
                      {link.name}
                      <span className={`absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary transition-opacity ${location.pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.3, duration: 0.5 }}
                className="mt-auto pt-10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-5 bg-enterprise-gradient text-white rounded-2xl flex items-center justify-center font-bold text-sm tracking-widest shadow-xl shadow-primary/20"
                >
                  GET STARTED
                </Link>
                <p className="text-center text-slate-400 text-[10px] mt-6 font-bold uppercase tracking-widest opacity-60">
                  Magizh NexGen Technologies
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
