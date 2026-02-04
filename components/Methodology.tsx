import React from 'react';
import { motion } from 'framer-motion';

const Methodology = () => {
    const steps = [
        {
            num: "01",
            title: "Find The Hidden Waste",
            description: "We talk with your team to understand how your business really works. We deliver a complete map showing where you're losing time and money and the exact plan to fix it."
        },
        {
            num: "02",
            title: "Fix & Build The Solution",
            description: "We redesign the broken process, then build custom AI and automations that do the work perfectly. Your team gets their time back and your business runs without mistakes."
        },
        {
            num: "03",
            title: "Train Your Team",
            description: "We teach your team how to use the new systems and turn new processes into daily habits. Your people focus on growth instead of busy work."
        },
        {
            num: "04",
            title: "Grow With You",
            description: "We monitor your systems and find new ways to save time and money as you grow. We're your partner for building a business that runs smoothly."
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-synaptix-base relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-synaptix-text mb-6">
                        How We <span className="text-synaptix-gold">Fix It</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="group relative">
                            {/* Larger indicator number - DARKER as requested */}
                            <div className="text-8xl font-bold text-synaptix-dark-surface/40 absolute -top-10 -left-2 z-0 group-hover:text-synaptix-gold/20 transition-colors">
                                {step.num}
                            </div>

                            <div className="relative z-10 pt-16">
                                <h3 className="text-xl font-black text-synaptix-text mb-6 group-hover:text-synaptix-gold transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-synaptix-muted leading-relaxed font-bold">
                                    {step.description}
                                </p>
                            </div>

                            {/* Glow Effect Element */}
                            <div className="absolute inset-0 bg-synaptix-gold/0 group-hover:bg-synaptix-gold/[0.02] rounded-[2rem] -m-4 transition-all duration-500 blur-xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
