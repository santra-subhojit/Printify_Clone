// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CustomProductsSection from './components/CustomProductsSection';
import FinalFeatures from './components/FinalFeatures';
import ConnectStore from './components/ConnectStore';
import CustomSolutions from './components/CustomSolutions';
import Testimonials from './components/Testimonials';
import ProfitCalculator from './components/ProfitCalculator';
import Footer from './components/Footer';
// Import other components

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CustomProductsSection />
      <FinalFeatures />
      <ConnectStore />
      <CustomSolutions />
      <Testimonials />
      <ProfitCalculator />
      <Footer />
      {/* Include other components */}
    </div>
  );
}

export default App;
