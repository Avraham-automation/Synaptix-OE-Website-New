import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#methodology' },
    { name: 'Why Us', href: '#comparison' },
    { name: 'Guarantee', href: '#guarantee' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-synaptix-base/90 backdrop-blur-xl border-b border-synaptix-gold/20 shadow-premium'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 cursor-pointer group flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Synaptix Logo"
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
            />
            <span className="text-xl font-bold text-synaptix-text tracking-tight group-hover:text-synaptix-gold transition-colors">Synaptix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-synaptix-text/80 hover:text-synaptix-gold font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://cal.com/avraham-rubin-pmasmz/chat-with-avi-synaptix"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-synaptix-gold hover:bg-synaptix-gold-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-gold hover:shadow-glow flex items-center gap-2 text-sm transform hover:-translate-y-0.5"
            >
              Book Audit
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-synaptix-text hover:text-synaptix-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-synaptix-base border-b border-synaptix-contrast overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-synaptix-text hover:text-synaptix-gold hover:bg-synaptix-gold-pale/30 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="https://cal.com/avraham-rubin-pmasmz/chat-with-avi-synaptix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-synaptix-gold text-white px-6 py-3 rounded-lg font-semibold shadow-gold active:scale-95 transition-all block text-center"
                >
                  Book Audit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
