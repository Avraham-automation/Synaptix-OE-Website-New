import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "How can you guarantee $20K+ in savings?",
            answer: "We audit your workflows and calculate the exact cost of current waste. The savings number comes from your actual data. If we don't find at least $20K in annual savings during the audit, you don't pay for it."
        },
        {
            question: "Will this work with our specific business, or is this generic?",
            answer: "Every solution is custom-built for your exact processes. We start by mapping how your business actually works, then design automation that fits your workflow. No templates or cookie-cutter systems."
        },
        {
            question: "What if our team resists the change or doesn't adopt it?",
            answer: "We involve your team from day one. They help us identify the problems, so they understand why changes are needed. We then train them thoroughly and provide ongoing support. The systems we build make their jobs easier, not harder."
        },
        {
            question: "What if we automate the wrong things and make problems worse?",
            answer: "This is why we use Lean Six Sigma first. We map and fix your processes before we automate anything. We never automate broken workflows. We redesign them properly, then make them automatic."
        },
        {
            question: "What happens after implementation - are we stuck depending on you?",
            answer: "We train your team to manage the systems and provide full documentation. You're never locked in. Our ongoing support is optional but recommended to keep optimizing as you grow."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-synaptix-surface relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-synaptix-text mb-6">
                        Frequently Asked <span className="text-synaptix-gold">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                            >
                                <span className="text-lg font-bold text-synaptix-text group-hover:text-synaptix-gold transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-synaptix-gold text-white rotate-180' : 'bg-gray-50 text-synaptix-muted'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 text-synaptix-muted font-medium leading-relaxed border-t border-gray-50 pt-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
