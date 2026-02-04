import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison = () => {
    const list_everyone = [
        "Automate first, ask questions later",
        "Sell you software subscriptions and disappear",
        "No accountability for business outcomes",
        "Generic playbooks from other industries",
        "Systems break and you're left to fix them"
    ];

    const list_synaptix = [
        "We diagnose with Lean Six Sigma before we build anything",
        "We build custom systems and implement them completely",
        "We guarantee results or work for free",
        "Every solution designed for your specific operation",
        "Self-healing workflows that detect and fix errors automatically"
    ];

    return (
        <section id="comparison" className="py-24 bg-synaptix-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-synaptix-text mb-6">
                        Why choose Synaptix over <span className="text-synaptix-gold italic underline decoration-synaptix-gold/30">everyone else?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
                    {/* VS Center Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-synaptix-base rounded-full border border-synaptix-gold/20 flex items-center justify-center font-black text-synaptix-gold shadow-premium hidden md:flex z-20">
                        VS
                    </div>

                    {/* Column 1: Everyone Else */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-gray-100 shadow-sm"
                    >
                        <h3 className="text-2xl font-bold text-synaptix-text mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center"><X size={20} /></span>
                            Everyone Else
                        </h3>
                        <ul className="space-y-6">
                            {list_everyone.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-synaptix-muted font-medium">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-200 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 2: Synaptix (GOLD) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-synaptix-gold p-10 rounded-[2.5rem] border border-synaptix-gold/20 shadow-glow relative"
                    >
                        <div className="absolute top-6 right-8 text-[10px] font-black text-synaptix-dark-surface uppercase tracking-[0.3em] opacity-80">The Standard</div>
                        <h3 className="text-2xl font-bold text-synaptix-dark-surface mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-synaptix-dark-surface text-synaptix-gold rounded-full flex items-center justify-center"><Check size={20} /></span>
                            Synaptix
                        </h3>
                        <ul className="space-y-6">
                            {list_synaptix.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-synaptix-dark-surface font-bold">
                                    <Check className="mt-1 w-5 h-5 text-synaptix-dark-surface shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12">
                            <a href="#guarantee" className="inline-flex items-center gap-2 text-synaptix-dark-surface font-black hover:gap-4 transition-all group">
                                Learn about our guarantee
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
