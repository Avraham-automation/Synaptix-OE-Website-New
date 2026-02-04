import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Timer, Recycle, Target, Send, Database, MousePointer2, Settings2 } from 'lucide-react';

const Agitate = () => {
    const wastes = [
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "1. Defects (Errors & Rework)",
            description: "Each mistake costs you time, money, and trust."
        },
        {
            icon: <Settings2 className="w-6 h-6" />,
            title: "2. Overproduction (Doing More Than Needed)",
            description: "Work that adds zero value but uses real time and money."
        },
        {
            icon: <Timer className="w-6 h-6" />,
            title: "3. Waiting (Idle Time)",
            description: "Dead time where nothing moves forward but costs keep running."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "4. Non-Utilized Talent (Wasted Human Potential)",
            description: "Your highest-paid talent doing the lowest-value work."
        },
        {
            icon: <Send className="w-6 h-6" />,
            title: "5. Transportation (Unnecessary Movement)",
            description: "Moving information between multiple systems manually wastes hours every week."
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "6. Inventory (Information Piling Up)",
            description: "Unprocessed leads and requests stack up, turning revenue into lost opportunities."
        },
        {
            icon: <MousePointer2 className="w-6 h-6" />,
            title: "7. Motion (Unnecessary Steps)",
            description: "Switching between disconnected tools turns simple tasks into time-consuming processes."
        },
        {
            icon: <Recycle className="w-6 h-6" />,
            title: "8. Extra Processing (Too Complicated)",
            description: "Complexity that kills speed and profit."
        }
    ];

    return (
        <section id="agitate" className="py-24 bg-synaptix-dark-surface text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        The 8 Wastes <span className="text-synaptix-gold">Silently Killing</span> Your Business
                    </h2>
                    <p className="text-xl text-white/60">
                        These problems happen every day. Here's what they're costing you:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wastes.map((waste, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="w-12 h-12 bg-synaptix-gold/10 rounded-xl flex items-center justify-center text-synaptix-gold mb-6 group-hover:bg-synaptix-gold group-hover:text-synaptix-dark-surface transition-all duration-300">
                                {waste.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 leading-tight">{waste.title}</h3>
                            <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                                {waste.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center p-8 bg-synaptix-gold/5 rounded-3xl border border-synaptix-gold/20 max-w-2xl mx-auto"
                >
                    <p className="text-lg font-bold text-synaptix-gold">
                        Every single one of these problems can be fixed. And every day you wait, they're costing you money.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Agitate;
