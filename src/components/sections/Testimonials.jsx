import React, { useState } from "react";
import Section from "../layout/Section";

/**
 * A slider component for testimonials.
 */
const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <Section id="testimonials">
      <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
        // Testimonials
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-12">
        What People Say About My Work
      </h3>
      <div className="relative max-w-3xl mx-auto">
        <div className="bg-white dark:bg-neutral-800/20 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-lg text-center">
          <p className="text-xl md:text-2xl font-light text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
            "{current.quote}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={current.image}
              alt={current.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-700"
            />
            <div>
              <p className="text-neutral-900 dark:text-white font-bold">
                {current.name}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {current.title}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 -translate-y-1/2 -left-6 bg-white/50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700 p-3 rounded-full transition-colors duration-300 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white/50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700 p-3 rounded-full transition-colors duration-300 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </Section>
  );
};

export default Testimonials;
