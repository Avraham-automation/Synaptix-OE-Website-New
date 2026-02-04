import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Gauge, Shield, Clock, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-synaptix-base">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-synaptix-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="z-20 relative"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-synaptix-gold-pale border border-synaptix-gold/20 mb-8 hover:bg-synaptix-gold/20 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-synaptix-gold animate-pulse"></span>
                            <span className="text-synaptix-gold-dark text-xs font-bold tracking-wider uppercase">Lean Six Sigma + AI</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-synaptix-text mb-6 leading-[1.05]">
                            Save $20K+ in Operational Costs in 90 Days. <br />
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#FFD700] drop-shadow-sm pb-1">
                                Guaranteed.
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-synaptix-muted mb-8 max-w-lg leading-relaxed font-medium">
                            We find where you're wasting time and money, fix it, and automate it. Scale profitably without adding headcount.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://cal.com/avraham-rubin-pmasmz/chat-with-avi-synaptix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#FFD700] to-[#E6B800] hover:from-[#E6B800] hover:to-[#FFD700] text-synaptix-dark-surface text-lg px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-gold hover:shadow-glow transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Book Your Free Efficiency Audit
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-medium text-synaptix-muted">
                            <motion.div variants={itemVariants} className="flex items-center gap-2 group cursor-default">
                                <div className="p-1 bg-green-100 rounded-full group-hover:scale-110 transition-transform"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
                                <span className="group-hover:text-synaptix-text transition-colors">$20K+ Guaranteed Savings</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-center gap-2 group cursor-default">
                                <div className="p-1 bg-blue-100 rounded-full group-hover:scale-110 transition-transform"><Zap className="w-4 h-4 text-blue-600" /></div>
                                <span className="group-hover:text-synaptix-text transition-colors">Self-Healing Automation</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Premium Analytics Dashboard Visualizer */}
                    <div className="relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full max-w-xl bg-white rounded-[3rem] p-10 shadow-[0_48px_100px_-20px_rgba(0,0,0,0.08)] border border-synaptix-gold/10 relative overflow-hidden"
                        >
                            {/* Inner Soft Gradient Ring */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-synaptix-gold/5 rounded-full blur-[100px] -z-10 mt-[-10%] mr-[-10%]"></div>

                            {/* Top Status Bar */}
                            <div className="flex items-center justify-between pb-8 mb-10 border-b border-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] font-black text-green-700 uppercase tracking-widest leading-none">SYSTEM OPTIMAL</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-synaptix-muted/50 uppercase tracking-wider">Real-time monitoring active</span>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                </div>
                            </div>

                            {/* Main Display Area */}
                            <div className="grid grid-cols-5 gap-12 items-center mb-16">
                                <div className="col-span-3">
                                    <span className="text-[11px] font-black text-synaptix-muted/60 uppercase tracking-[0.25em] mb-4 block">Projected Monthly Savings</span>
                                    <div className="flex items-baseline gap-1">
                                        <h2 className="text-6xl font-black text-synaptix-text tracking-tighter">$24,500.00</h2>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-green-600 text-xs font-black mt-3">
                                        <TrendingUp size={14} />
                                        <span>+12% vs last month</span>
                                    </div>
                                </div>

                                {/* Trend Graph */}
                                <div className="col-span-2 relative h-28 flex flex-col justify-end">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 160 80">
                                        <defs>
                                            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
                                                <stop offset="100%" stopColor="#22C55E" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d="M 0 70 Q 20 70, 40 60 T 80 50 T 120 40 T 160 15"
                                            fill="none"
                                            stroke="url(#glowGradient)"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2.5, ease: "easeInOut" }}
                                        />
                                        <motion.circle
                                            cx="160" cy="15" r="4" fill="#22C55E"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2.2 }}
                                        />
                                    </svg>
                                    <div className="flex justify-between text-[9px] font-black text-synaptix-muted/30 uppercase tracking-[0.2em] pt-4 border-t border-gray-50 mt-4">
                                        <span>Day 1</span>
                                        <span>Day 90</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row Metrics */}
                            <div className="grid grid-cols-3 gap-8">
                                <div className="space-y-3 p-1">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100/50">
                                        <Gauge size={18} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-2xl font-black text-synaptix-text tracking-tight">99.9%</div>
                                        <div className="text-[10px] font-black text-synaptix-muted uppercase tracking-widest leading-none">Efficiency Score</div>
                                        <div className="text-[9px] font-bold text-blue-500 uppercase tracking-tighter">Top 1% of industry</div>
                                    </div>
                                </div>

                                <div className="space-y-3 p-1">
                                    <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 border border-green-100/50">
                                        <Shield size={18} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-2xl font-black text-synaptix-text tracking-tight leading-tight">All Systems</div>
                                        <div className="text-[10px] font-black text-synaptix-muted uppercase tracking-widest leading-none">System Health</div>
                                        <div className="text-[9px] font-bold text-green-500 uppercase tracking-tighter">Operational | Just now</div>
                                    </div>
                                </div>

                                <div className="space-y-3 p-1">
                                    <div className="w-9 h-9 rounded-xl bg-synaptix-gold-pale flex items-center justify-center text-synaptix-gold-dark border border-synaptix-gold/10">
                                        <Clock size={18} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-2xl font-black text-synaptix-text tracking-tight">127 hours</div>
                                        <div className="text-[10px] font-black text-synaptix-muted uppercase tracking-widest leading-none">Time Reclaimed</div>
                                        <div className="text-[9px] font-bold text-synaptix-gold-dark uppercase tracking-tighter">This month</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
