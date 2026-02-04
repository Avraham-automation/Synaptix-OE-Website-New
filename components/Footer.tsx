import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-synaptix-dark-surface text-white border-t border-synaptix-gold/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-3 mb-4 cursor-pointer group"
                        >
                            <img src="/logo.png" alt="Synaptix Logo" className="h-10 w-auto transition-all duration-300 group-hover:scale-105" />
                            <span className="text-xl font-bold text-synaptix-gold tracking-tighter italic group-hover:text-synaptix-gold-light transition-colors">SYNAPTIX</span>
                        </div>
                        <p className="text-sm text-white/60 max-w-xs">
                            Redefining the standard for operational excellence. We build the systems that build the future.
                        </p>
                        <p className="text-xs text-white/40 mt-6">
                            © 2026 Synaptix Inc. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://www.linkedin.com/in/avraham-rubin-04320b219/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-synaptix-gold hover:text-synaptix-dark-surface transition-all duration-300 group">
                            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61571883849202" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-synaptix-gold hover:text-synaptix-dark-surface transition-all duration-300 group">
                            <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
