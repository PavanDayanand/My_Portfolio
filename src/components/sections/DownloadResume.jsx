import React from "react";
import Section from "../layout/Section";

const DownloadResume = () => {
  return (
    <Section id="resume">
      <div className="text-center bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-lg p-12 float-animation">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Interested in My Work?
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
          You can download a PDF version of my resume to get a more detailed
          look at my experience and qualifications.
        </p>
        <a
          href="/Pavan D.pdf"
          download="Pavan_D_Resume.pdf"
          className="gradient-button inline-block text-black font-bold py-3 px-8 rounded-full"
        >
          Download Resume
        </a>
        <p className="text-neutral-500 text-xs mt-4"></p>
      </div>
    </Section>
  );
};

export default DownloadResume;
