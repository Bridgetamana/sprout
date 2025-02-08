import React, { useState } from "react";
import { Link } from "react-router";
import { LuSprout, LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "../utils/data";
import { motion } from "framer-motion";

const Header = () => {
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
  );
};

export default Header;
