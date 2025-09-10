import React from "react";

/**
 * The footer component with contact information.
 */
const Footer = ({ name, contact }) => {
  return (
    <footer
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Let's Connect
        </h3>
        <p className="text-neutral-700 dark:text-neutral-400 max-w-xl mx-auto mb-8">
          I'm currently seeking new opportunities. If you have a project in mind
          or just want to say hi, feel free to reach out.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="text-xl md:text-2xl text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors duration-300 font-mono"
        >
          {contact.email}
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-neutral-500 dark:text-neutral-600 text-sm mt-16">
          &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
