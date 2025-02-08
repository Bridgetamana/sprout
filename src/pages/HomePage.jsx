import { useState } from 'react';
import { LuSprout, LuMenu, LuX, LuMail, LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { testimonials, features, faqs} from "../components/data"
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-stone-50">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 mx-auto max-w-7xl md:px-8 lg:px-10"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <span className="text-xl font-semibold text-stone-800">
                  Sprout
                </span>
                <LuSprout className="w-auto h-8 text-emerald-700" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <LuMenu className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-semibold text-stone-600 hover:text-emerald-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/quiz"
                className="font-semibold text-stone-600 hover:text-emerald-700"
              >
                Get Started <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-50"></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-stone-50 sm:max-w-sm">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5 flex items-center">
                    <span className="text-xl font-semibold text-emerald-900">
                      Sprout
                    </span>
                    <LuSprout className="w-auto h-8 text-emerald-700" />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <LuX className="w-6 h-6" />
                  </button>
                </div>
                <div className="flow-root mt-6">
                  <div className="-my-6 divide-y divide-stone-500/10">
                    <div className="py-6 space-y-2">
                      {navLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="block px-3 py-2 -mx-3 font-semibold rounded-lg text-stone-600 hover:text-emerald-700 text-base/7 hover:bg-emerald-50"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link
                        to="/quiz"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-stone-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <div className="relative px-6 isolate pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80bbff] to-emerald-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <motion.div
            className="max-w-3xl mx-auto py-28 lg:py-36"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              className="hidden sm:mb-8 sm:flex sm:justify-center"
              variants={fadeIn}
            >
              <div className="relative px-3 py-1 text-gray-600 rounded-full text-sm/6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                🌱 Your Plant Journey Starts Here.
              </div>
            </motion.div>
            <div className="text-center">
              <motion.h1
                variants={fadeIn}
                className="text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl"
              >
                Grow Your Green Family with Confidence
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="mt-8 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8"
              >
                Join thousands of plant parents who&apos;ve found their perfect
                match and mastered plant care with Sprout.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex flex-wrap items-center justify-center mt-10 gap-y-3 gap-x-6"
              >
                <Link
                  to="/quiz"
                  className="px-6 py-3 text-sm font-semibold border-2 rounded-full border-emerald-600 bg-emerald-600 hover:bg-emerald-800 text-stone-50"
                >
                  Find Your Plant Match
                </Link>
                <Link
                  to="/care-guide"
                  className="px-6 py-3 text-sm font-semibold border-2 rounded-full border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                >
                  Explore Care Guides
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80bbff] to-emerald-600 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="features"
        className="p-6 py-32 mx-auto max-w-7xl md:px-8 lg:px-10 bg-gradient-to-b from-stone-50 to-white"
      >
        <div className="px-4 mx-auto ">
          <motion.div
            variants={fadeIn}
            className="max-w-2xl mx-auto mb-20 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-stone-800">
              Everything You Need to Thrive
            </h2>
            <p className="text-stone-600">
              We&apos;ve crafted the perfect tools to help you become a
              confident plant parent
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        id="testimonial"
        className="p-6 py-32 bg-gradient-to-b from-emerald-50 to-stone-50 md:px-8 lg:px-10"
      >
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            variants={fadeIn}
            className="max-w-2xl mx-auto mb-20 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-stone-800">
              Growing Community
            </h2>
            <p className="text-stone-600">
              Join thousands of happy plant parents in our thriving community
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        id="faqs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-32 bg-white"
      >
        <div className="max-w-4xl px-4 mx-auto">
          <motion.div
            variants={fadeIn}
            className="max-w-2xl mx-auto mb-20 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-stone-800">
              Common Questions
            </h2>
            <p className="text-stone-600">
              Everything you need to know about getting started
            </p>
          </motion.div>
          <motion.div variants={staggerChildren} className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeIn}>
                <FaqItem {...faq} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <footer className="pt-24 pb-12 bg-stone-100">
        <div className="max-w-[85rem] mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <LuSprout className="w-6 h-6 text-emerald-700" />
                <span className="text-xl font-semibold text-stone-800">
                  sprout
                </span>
              </div>
              <p className="text-stone-600">
                Making plant parenthood simple and enjoyable for everyone.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 transition-colors text-stone-600 hover:text-emerald-700"
                >
                  <LuInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 transition-colors text-stone-600 hover:text-emerald-700"
                >
                  <LuTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 transition-colors text-stone-600 hover:text-emerald-700"
                >
                  <LuFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-stone-800">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">
                    About Us
                  </button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">
                    Features
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-stone-800">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">
                    Plant Care Tips
                  </button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">
                    Community
                  </button>
                </li>
                <li>
                  <button className="text-stone-600 hover:text-emerald-700">
                    FAQs
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-stone-800">
                Stay Updated
              </h3>
              <p className="mb-4 text-stone-600">
                Subscribe to our newsletter for plant care tips and updates.
              </p>
              <form className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border rounded-l-full border-stone-200 focus:outline-none focus:border-emerald-700"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-white transition-colors rounded-r-full bg-emerald-700 hover:bg-emerald-800"
                  >
                    <LuMail className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-200">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-stone-600">
                © {new Date().getFullYear()} Sprout. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <button className="text-sm text-stone-600 hover:text-emerald-700">
                  Privacy Policy
                </button>
                <button className="text-sm text-stone-600 hover:text-emerald-700">
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
