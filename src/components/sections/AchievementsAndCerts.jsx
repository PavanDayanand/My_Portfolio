import React from "react";
import Section from "../layout/Section";

/**
 * Displays Achievements and Certifications in a two-column layout.
 */
const AchievementsAndCerts = ({ achievements, certifications }) => {
  return (
    <Section id="achievements">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
            // Achievements
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8">
            Milestones & Recognition
          </h3>
          <div className="space-y-6">
            {achievements.map((ach, index) => (
              <div
                key={index}
                className="interactive-card bg-white dark:bg-neutral-800/50 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700"
              >
                <h4 className="font-bold text-lg text-neutral-900 dark:text-white">
                  {ach.title}
                </h4>
                <p className="text-neutral-700 dark:text-neutral-400 text-sm mt-1">
                  {ach.description}
                </p>
                {ach.date && (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                    {ach.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm uppercase text-neutral-500 tracking-widest mb-2">
            // Certifications
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8">
            Continuous Learning
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="interactive-card bg-white dark:bg-neutral-800/50 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center gap-4"
              >
                {cert.icon()}
                <div>
                  <h4 className="font-bold text-lg text-neutral-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-400 text-sm mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AchievementsAndCerts;
