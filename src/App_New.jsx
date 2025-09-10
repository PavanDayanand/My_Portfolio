import React, { useState, useEffect } from "react";
import "./styles/portfolio.css";

// Import all components from the organized structure
import {
  Header,
  Footer,
  Hero,
  About,
  DownloadResume,
  Skills,
  Projects,
  AchievementsAndCerts,
  Testimonials,
  ThemeToggle,
  BackToTopButton,
  CustomCursor,
  BackgroundBlobs,
} from "./components";

// Import portfolio data
import portfolioData from "./data/portfolioData";

/**
 * Main App Component
 * The central component that orchestrates the entire portfolio application.
 * Handles theme management, active section tracking, and renders all main sections.
 */
export default function App() {
  // State to manage the theme (light/dark)
  const [theme, setTheme] = useState("dark");
  // State to track the currently active section for the navigation bar
  const [activeSection, setActiveSection] = useState("home");

  // Toggles the theme between 'dark' and 'light'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // This effect uses an Intersection Observer to detect which section is currently in the viewport
  // and updates the 'activeSection' state accordingly. This is used to highlight the active link in the nav bar.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // The section is considered active when it's in the middle 40% of the screen
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // This effect toggles the 'dark' class on the HTML element when the theme changes.
  // Tailwind's dark mode variant (`dark:`) uses this class to apply dark styles.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Main JSX render for the entire application
  return (
    <main className="relative z-0">
      {/* Background and UI elements */}
      <BackgroundBlobs />
      <CustomCursor />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <BackToTopButton />
      <Header activeSection={activeSection} />

      {/* Main content sections */}
      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        summary={portfolioData.summary}
      />
      <About education={portfolioData.education} />
      <DownloadResume />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <AchievementsAndCerts
        achievements={portfolioData.achievements}
        certifications={portfolioData.certifications}
      />
      <Testimonials testimonials={portfolioData.testimonials} />
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
    </main>
  );
}
