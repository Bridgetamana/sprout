import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

const HomePage = () => {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Features />
      <Testimonial />
      <FAQs />
      <Footer />
    </div>
  );
};

export default HomePage;
