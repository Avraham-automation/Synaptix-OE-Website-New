import React from 'react';
import { Coins, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Guarantee = () => {
    return (
        <section id="guarantee" className="py-24 bg-synaptix-base relative overflow-hidden">
            {/* Advanced Ambient Glows */}
            <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-synaptix-gold/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-synaptix-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-synaptix-text mb-6">
                        Our <span className="text-synaptix-gold">Double Guarantee</span>
                    </h2>
                    <p className="text-xl text-synaptix-muted">
                        We take the risk so you don't have to. Our incentives are perfectly aligned with your results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
                    {/* Perspective Container */}
                    <div className="absolute inset-0 bg-gradient-to-b from-synaptix-gold/[0.03] to-transparent rounded-[4rem] -m-8 pointer-events-none"></div>

                    {/* Guarantee 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-synaptix-gold/20 shadow-premium relative overflow-hidden flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-500"
                    >
                        {/* Dynamic Gold Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-synaptix-gold/0 via-synaptix-gold/[0.02] to-synaptix-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-synaptix-gold/5 rounded-full blur-3xl group-hover:bg-synaptix-gold/20 transition-all duration-700"></div>

                        <div className="relative z-10 w-full flex flex-col items-center">
                            <div className="w-20 h-20 bg-synaptix-gold-pale rounded-[2rem] flex items-center justify-center text-synaptix-gold mb-8 group-hover:bg-synaptix-gold group-hover:text-white transition-all duration-500 shadow-gold/20 shadow-xl group-hover:rotate-6">
                                <Coins size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-synaptix-text mb-6">Guarantee #1: The Savings Discovery Promise</h3>
                            <p className="text-synaptix-muted text-lg leading-relaxed font-bold">
                                During your audit, we'll identify at least $20K in annual operational waste. If we don't find it, the audit is free. You only pay when we prove the savings exist.
                            </p>
                        </div>
                    </motion.div>

                    {/* Guarantee 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] border border-synaptix-gold/20 shadow-premium relative overflow-hidden flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-500"
                    >
                        {/* Dynamic Gold Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-synaptix-gold/0 via-synaptix-gold/[0.02] to-synaptix-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-synaptix-gold/5 rounded-full blur-3xl group-hover:bg-synaptix-gold/20 transition-all duration-700"></div>

                        <div className="relative z-10 w-full flex flex-col items-center">
                            <div className="w-20 h-20 bg-synaptix-gold-pale rounded-[2rem] flex items-center justify-center text-synaptix-gold mb-8 group-hover:bg-synaptix-gold group-hover:text-white transition-all duration-500 shadow-gold/20 shadow-xl group-hover:-rotate-6">
                                <RefreshCw size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-synaptix-text mb-6">Guarantee #2: The Implementation Performance Promise</h3>
                            <p className="text-synaptix-muted text-lg leading-relaxed font-bold">
                                Once we build and implement your automation, it will deliver the projected savings within 90 days—if you use the system as designed. If you follow our process and don't hit the target, we'll refund your build fee and continue optimizing for free until you do.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-12 py-8 bg-synaptix-dark-surface text-white rounded-[3rem] shadow-[0_20px_50px_rgba(202,138,4,0.3)] border border-synaptix-gold/30 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-synaptix-gold/0 via-synaptix-gold/10 to-synaptix-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <p className="text-2xl font-black relative z-10">
                            The Result: <span className="text-synaptix-gold italic">You never pay for the audit unless we find real savings, and you get your money back if the automation doesn't deliver.</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
