import React from "react";
import { motion } from "framer-motion";
import { faqs } from "../utils/data";
import FaqItem from "../components/FaqItem";

const FAQs = () => {
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
  );
};

export default FAQs;
