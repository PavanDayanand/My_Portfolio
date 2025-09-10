import React from "react";

/**
 * The Hero (main landing) section of the portfolio.
 */
const Hero = ({ name, title, summary }) => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 relative pt-20 md:pt-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Animated scroll indicator */}
        <div className="scroll-indicator absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center transform -rotate-90">
          <span className="text-neutral-500 uppercase tracking-widest text-sm">
            Scroll
          </span>
          <div className="w-10 h-px bg-neutral-500 ml-4"></div>
        </div>
        <h2 className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
          Hey, I'm a {title}
        </h2>
        <h1
          className="hero-name-glow text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold my-4 uppercase tracking-tighter animated-gradient-text"
          style={{ lineHeight: "1" }}
        >
          {name}
        </h1>
        <div className="mt-12 max-w-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
          <p className="text-neutral-700 dark:text-neutral-300 text-lg">
            {summary}
          </p>
          <button
            onClick={scrollToProjects}
            className="gradient-button flex-shrink-0 text-black font-bold py-3 px-6 rounded-full whitespace-nowrap"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
