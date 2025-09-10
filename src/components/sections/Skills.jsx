import React from "react";
import Section from "../layout/Section";

/**
 * Displays skills categorized in interactive cards.
 */
const Skills = ({ skills }) => {
  const CodeIcon = () => (
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
      className="h-6 w-6 text-neutral-500"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );

  // Links for each skill to their official page for more information.
  const skillLinks = {
    Python: "https://www.python.org/",
    "SQL (MySQL)": "https://www.mysql.com/",
    "Generative AI":
      "https://en.wikipedia.org/wiki/Generative_artificial_intelligence",
    CNN: "https://en.wikipedia.org/wiki/Convolutional_neural_network",
    LLMs: "https://en.wikipedia.org/wiki/Large_language_model",
    Pandas: "https://pandas.pydata.org/",
    NumPy: "https://numpy.org/",
    Matplotlib: "https://matplotlib.org/",
    "Scikit-learn": "https://scikit-learn.org/",
    LangChain: "https://www.langchain.com/",
    "React.js": "https://react.dev/",
    FastAPI: "https://fastapi.tiangolo.com/",
    "Tailwind CSS": "https://tailwindcss.com/",
    Tableau: "https://www.tableau.com/",
    PowerBI: "https://powerbi.microsoft.com/",
    Figma: "https://www.figma.com/",
    BigQuery: "https://cloud.google.com/bigquery",
    Git: "https://git-scm.com/",
    GitHub: "https://github.com/",
  };

  return (
    <Section id="skills">
      <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
        // My Skills
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-12">
        The Tools Behind My Work
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
          <div
            key={skillCategory.category}
            className="interactive-card bg-white dark:bg-neutral-800/20 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <h4 className="text-xl text-neutral-900 dark:text-white font-semibold">
                {skillCategory.category}
              </h4>
              <CodeIcon />
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((item) => {
                const url = skillLinks[item];
                const commonClasses =
                  "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/20";
                if (url) {
                  return (
                    <a
                      key={item}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${commonClasses} hover:bg-green-100 dark:hover:bg-green-500/20 hover:text-green-700 dark:hover:text-green-400`}
                    >
                      {item}
                    </a>
                  );
                }
                return (
                  <span key={item} className={commonClasses}>
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
