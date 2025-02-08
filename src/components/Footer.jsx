import React from "react";
import {
  LuMail,
  LuFacebook,
  LuTwitter,
  LuInstagram,
} from "react-icons/lu";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="p-6 pt-24 bg-stone-100">
      <div className="mx-auto max-w-7xl md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
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
            <h3 className="mb-4 font-semibold text-stone-800">Stay Updated</h3>
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
  );
};

export default Footer;
