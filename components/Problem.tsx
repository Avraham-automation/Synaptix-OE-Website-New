import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
    const problems = [
        {
            title: "Process Defects Cost You Twice",
            description: "Mistakes in your operations require time and money to fix. Each error also damages your reputation and costs you future opportunities.",
            emoji: "💸"
        },
        {
            title: "Process Variation Kills Consistency",
            description: "Your output quality depends on who's working that day and how they're feeling. Inconsistent processes mean unpredictable results, making it impossible to scale reliably.",
            emoji: "⏰"
        },
        {
            title: "Manual Work Creates Capacity Limits",
            description: "Your growth is capped by how many people you can hire and train. Every new customer requires more hands, more overhead, and more complexity.",
            emoji: "🚪"
        }
    ];

    return (
        <section id="problem" className="py-24 bg-synaptix-base relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-synaptix-text mb-6">
                        Operational Inefficiencies Are the <span className="text-synaptix-gold">Hidden Tax</span> on Your Profits
                    </h2>
                    <p className="text-xl text-synaptix-muted">
                        Your business is losing money every single day to broken processes and manual work.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-synaptix-surface p-8 rounded-2xl shadow-premium border border-synaptix-contrast hover:border-synaptix-gold/50 transition-colors duration-300 relative group text-center"
                        >
                            <div className="mb-6">
                                <span className="text-6xl">{problem.emoji}</span>
                            </div>
                            <h3 className="text-xl font-bold text-synaptix-text mb-4">
                                {problem.title}
                            </h3>
                            <p className="text-synaptix-muted leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
