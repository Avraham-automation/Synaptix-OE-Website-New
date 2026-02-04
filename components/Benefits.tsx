import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const benefits = [
        {
            title: "Your Revenue Grows Faster Than Your Costs",
            description: "When you automate, adding more customers doesn't mean adding more staff. Your profit margin gets bigger as you grow. This is how you build real wealth in your business.",
            emoji: "💰"
        },
        {
            title: "Handle 10x More Work With the Same Team",
            description: "Your systems work 24/7 without getting tired. You can serve 100 customers as easily as you serve 10. Scale up fast without the hiring nightmare.",
            emoji: "⚡"
        },
        {
            title: "Every Process Runs Perfectly, Every Time",
            description: "No more mistakes in quotes or invoices. No more missed follow-ups. Every customer gets the same fast, accurate service. Your reputation improves and referrals increase.",
            emoji: "🎯"
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-synaptix-base relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-synaptix-text mb-6">
                        What You Gain When Your Business <span className="text-synaptix-gold">Runs Like a Machine</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-synaptix-surface p-8 rounded-2xl shadow-premium border border-synaptix-contrast hover:border-synaptix-gold/50 transition-colors duration-300 relative group text-center"
                        >
                            <div className="mb-6">
                                <span className="text-6xl">{benefit.emoji}</span>
                            </div>
                            <h3 className="text-xl font-bold text-synaptix-text mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-synaptix-muted leading-relaxed font-bold">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
