import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-32 bg-synaptix-base text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-synaptix-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-synaptix-text mb-8 tracking-tight">
                    Ready to See Where You're Losing Money?
                </h2>
                <p className="text-2xl text-synaptix-gold font-bold mb-4">
                    Book a free efficiency audit.
                </p>
                <p className="text-xl text-synaptix-muted mb-12 max-w-2xl mx-auto font-medium">
                    In 20 minutes, we'll map your biggest operational waste and calculate exactly how much it's costing you every month.
                </p>

                <a
                    href="https://cal.com/avraham-rubin-pmasmz/chat-with-avi-synaptix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-synaptix-gold hover:bg-synaptix-gold-dark text-synaptix-dark-surface px-10 py-5 rounded-full font-black text-xl transition-all duration-300 shadow-gold hover:shadow-glow transform hover:-translate-y-1 items-center gap-3 group"
                >
                    Book Your Free Audit
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default FinalCTA;
