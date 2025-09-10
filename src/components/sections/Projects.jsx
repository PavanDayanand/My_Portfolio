import React from "react";
import Section from "../layout/Section";

/**
 * Displays project cards in a grid layout.
 */
const Projects = ({ projects }) => {
  const GithubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  const DriveIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  // Helper function to determine if URL is a GitHub link
  const isGitHubUrl = (url) => {
    return url && url.includes("github.com");
  };

  // Helper function to determine if URL is a Google Drive link
  const isDriveUrl = (url) => {
    return (
      url &&
      (url.includes("drive.google.com") || url.includes("docs.google.com"))
    );
  };

  return (
    <Section id="projects">
      <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
        // Explore Work
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-12">
        A Showcase of My Latest Projects
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col group interactive-card bg-white dark:bg-neutral-800/20 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800"
          >
            <div className="overflow-hidden rounded-lg shadow-2xl mb-6 select-none">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 select-none"
                draggable="false"
              />
            </div>
            <div className="select-none">
              <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {project.title}
              </h4>
              <p className="text-neutral-700 dark:text-neutral-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            {/* Links section - allow selection and pointer events */}
            <div
              className="flex items-center gap-4 mt-4"
              style={{ userSelect: "auto", pointerEvents: "auto" }}
            >
              {/* GitHub/Drive Link */}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                  style={{ userSelect: "none", pointerEvents: "auto" }}
                  tabIndex={0}
                >
                  {isGitHubUrl(project.githubUrl) ? (
                    <>
                      <GithubIcon /> <span>Code</span>
                    </>
                  ) : isDriveUrl(project.githubUrl) ? (
                    <>
                      <DriveIcon /> <span>Drive</span>
                    </>
                  ) : (
                    <>
                      <ExternalLinkIcon /> <span>Source</span>
                    </>
                  )}
                </a>
              )}

              {/* Live Demo Link */}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                  style={{ userSelect: "none", pointerEvents: "auto" }}
                  tabIndex={0}
                >
                  <ExternalLinkIcon /> <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
