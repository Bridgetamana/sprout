import { useState } from 'react';
import { LuSprout, LuChevronRight, LuMenu, LuX, LuMail, LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";
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
      <div id='features' className="py-24">
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
      <div id='testimonial' className="bg-stone-100 py-24 rounded-t-[3rem]">
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
      <footer className="bg-stone-100 pt-24 pb-12">
        <div className="max-w-[85rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <LuSprout className="text-emerald-700 h-6 w-6" />
                <span className="text-xl font-semibold text-stone-800">sprout</span>
              </div>
              <p className="text-stone-600">
                Making plant parenthood simple and enjoyable for everyone.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 text-stone-600 hover:text-emerald-700 transition-colors">
                  <LuInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 text-stone-600 hover:text-emerald-700 transition-colors">
                  <LuTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 text-stone-600 hover:text-emerald-700 transition-colors">
                  <LuFacebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">About Us</button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">Features</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">Blog</button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">Plant Care Tips</button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">Community</button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">FAQs</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-4">Stay Updated</h3>
              <p className="text-stone-600 mb-4">
                Subscribe to our newsletter for plant care tips and updates.
              </p>
              <form className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-full border border-stone-200 focus:outline-none focus:border-emerald-700"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-700 text-white px-4 py-2 rounded-r-full hover:bg-emerald-800 transition-colors"
                  >
                    <LuMail className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-stone-600 text-sm">
                © {new Date().getFullYear()} Sprout. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <button className="text-stone-600 hover:text-emerald-700 text-sm">
                  Privacy Policy
                </button>
                <button className="text-stone-600 hover:text-emerald-700 text-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;