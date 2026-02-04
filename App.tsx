import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Agitate from './components/Agitate';
import Comparison from './components/Comparison';
import Methodology from './components/Methodology';
import Benefits from './components/Benefits';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-synaptix-base selection:bg-synaptix-gold selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Agitate />
        <Methodology />
        <Benefits />
        <Comparison />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;