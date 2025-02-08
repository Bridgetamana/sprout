import React from "react";
import { motion } from "framer-motion";
import { features } from "../utils/data";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="features"
      className="p-6 mx-auto py-28 max-w-7xl md:px-8 lg:px-10 "
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
            We&apos;ve crafted the perfect tools to help you become a confident
            plant parent
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
  );
};

export default Features;
