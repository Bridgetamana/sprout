import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../utils/data";
import TestimonialCard from "../components/TestimonialCard";

const Testimonial = () => {
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
  );
};

export default Testimonial;
