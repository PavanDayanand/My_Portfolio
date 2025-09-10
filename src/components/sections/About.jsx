import React from "react";
import Section from "../layout/Section";

/**
 * About Me and Education section.
 */
const About = ({ education }) => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
            // About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Driven by Data, Defined by Results.
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-4">
            I am passionate about solving real-world problems by turning ideas
            into clean, maintainable, and impactful data-driven solutions.
            You'll find me building side projects, diving into new tech stacks,
            or simply exploring what's next in the world of AI and web
            development.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-lg">
            My goal is to leverage my skills in machine learning and data
            science to contribute to innovative projects and drive business
            value.
          </p>
        </div>
        <div>
          <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
            // Education
          </h2>
          <div className="interactive-card bg-white dark:bg-neutral-800/50 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
              {education.degree}
            </h4>
            <p className="text-green-600 dark:text-green-400 mt-1">
              {education.institution}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2">
              {education.location}
            </p>
            <div className="flex justify-between items-baseline mt-4">
              <span className="text-neutral-700 dark:text-neutral-300">
                {education.duration}
              </span>
              <span className="font-bold text-green-800 dark:text-green-400 bg-green-100 dark:bg-green-500/10 px-2 py-1 rounded-md text-sm">
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
