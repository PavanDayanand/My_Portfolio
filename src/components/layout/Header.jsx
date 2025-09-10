import React from "react";

/**
 * The main header component.
 * Displays a floating pill-shaped navigation on desktop and a status pill on mobile.
 */
const Header = ({ activeSection }) => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Pill Header */}
      <header className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-4 bg-white/10 dark:bg-neutral-900/50 backdrop-blur-lg shadow-lg px-6 py-3 rounded-full">
          <a
            onClick={() => scrollToSection("home")}
            className={`capitalize cursor-pointer transition-colors text-sm ${
              activeSection === "home"
                ? "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
            } pr-2 font-bold animated-gradient-text`}
          >
            |\|
          </a>
          <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-700"></div>
          <div className="flex items-center gap-5">
            {sections.map((section) => (
              <a
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize cursor-pointer transition-colors text-sm ${
                  activeSection === section
                    ? "text-green-500 dark:text-green-400"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Top Bar - Displays current section */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-300">
        <div className="flex justify-center items-center bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg shadow-lg px-4 py-2 rounded-full">
          <span className="capitalize text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {activeSection}
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
