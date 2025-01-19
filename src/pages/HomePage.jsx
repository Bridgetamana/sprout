import { useState } from 'react';
import { LuSprout, LuChevronRight, LuMenu, LuX } from "react-icons/lu";
import { testimonials, features, faqs} from "../components/Data"
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';
import HeroImage from '../assets/heroimage.png'


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-100 rounded-b-[3rem] relative">
        <nav className="max-w-[85rem] mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <LuSprout className="text-emerald-700 h-6 w-6" />
              <span className="text-xl font-semibold text-stone-800">sprout</span>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <LuX /> : <LuMenu />}
            </button>
            <div className="hidden md:flex space-x-8 items-center">
              <button className="text-stone-600 hover:text-emerald-700">About</button>
              <button className="text-stone-600 hover:text-emerald-700">Features</button>
              <button className="text-stone-600 hover:text-emerald-700">Testimonials</button>
              <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-all hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white p-4 shadow-lg z-50">
              <div className="flex flex-col space-y-4">
                <button className="text-stone-600 hover:text-emerald-700">About</button>
                <button className="text-stone-600 hover:text-emerald-700">Features</button>
                <button className="text-stone-600 hover:text-emerald-700">Testimonials</button>
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
        <div className="max-w-[85rem] mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium">
                🌱 Your Plant Journey Starts Here
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
                Grow Your Green Family with Confidence
              </h1>
              <p className="text-lg text-stone-600">
                Join thousands of plant parents who&apos;ve found their perfect match 
                and mastered plant care with Sprout.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition-all hover:scale-105 flex items-center justify-center">
                  Find Your Plant Match
                  <LuChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-emerald-700 text-emerald-700 px-6 py-3 rounded-full hover:bg-emerald-50 transition-all hover:scale-105">
                  Explore Care Guides
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-emerald-100 rounded-full absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5" />
              <img 
                src={HeroImage}
                alt="Plant illustration" 
                className="relative z-10 mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-[85rem] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-16">
            Everything You Need to Thrive
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-stone-100 py-24 rounded-t-[3rem]">
        <div className="max-w-[85rem] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-16">
            Growing Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-16">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;