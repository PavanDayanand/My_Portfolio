/**
 * Portfolio Data
 * All the text content for the portfolio is stored in this single object.
 * This makes it easy to update your information in one place without touching the component code.
 */

const portfolioData = {
  name: "Pavan D",
  title: "Data Scientist & AI Enthusiast",
  summary:
    "A Computer Science student specializing in Data Science with strong expertise in Machine Learning, Data Analytics, and AI-driven solutions. I turn complex data into clean, scalable, and user-friendly applications.",
  contact: {
    email: "pavan.radapa@gmail.com",
    phone: "+91 7204163730",
    linkedin: "https://www.linkedin.com/in/pavan-d-b5b3b325b/",
    github: "https://github.com/PavanDayananda",
  },
  education: {
    institution: "Bangalore Institute of Technology",
    location: "VV Puram, Bangalore, India",
    degree: "Computer Science and Engineering (Data Science)",
    cgpa: "8.44/10",
    duration: "December 2022 - Present",
  },
  skills: [
    {
      category: "Data Science & ML/DL",
      items: [
        "Data Preprocessing",
        "EDA",
        "Feature Engineering",
        "ETL",
        "Supervised & Unsupervised Learning",
        "Generative AI",
        "CNN",
        "LLMs",
      ],
    },
    {
      category: "Languages & Databases",
      items: ["Python", "SQL (MySQL)"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "LangChain",
        "React.js",
        "FastAPI",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "VS Code",
        "Jupyter Notebook",
        "Tableau",
        "PowerBI",
        "Figma",
        "BigQuery",
        "Git",
        "GitHub",
      ],
    },
  ],
  projects: [
    {
      title: "CLARITY",
      description:
        "An advanced multimodal AI system designed to assist radiologists. It integrates Convolutional and Recurrent Neural Networks with Generative AI to not only predict diseases from chest X-rays but also to generate detailed diagnostic reports and provide visual explanations using Grad-CAM, significantly enhancing diagnostic confidence and accuracy.",
      tags: ["Generative AI", "CNN", "RNN", "Grad-CAM"],
      imageUrl: "https://placehold.co/600x400/0D0D0D/FFF?text=CLARITY",
      githubUrl: "https://github.com/PavanDayananda",
      liveUrl: "#",
    },
    {
      title: "EduGenie",
      description:
        "A smart academic tool that transforms static documents into interactive learning experiences. By leveraging the Gemini API and LangChain, EduGenie provides intelligent insights and summaries. Its OCR capabilities, powered by PyMuPDF, automate data extraction, cutting down manual entry efforts by over 60% and creating a more efficient learning workflow.",
      tags: ["React.js", "Gemini API", "FastAPI", "LLMs", "Tailwind CSS"],
      imageUrl: "https://placehold.co/600x400/0D0D0D/FFF?text=EduGenie",
      githubUrl: "https://github.com/harshakl03/EduGenie",
      liveUrl: "#",
    },
    {
      title: "Diabetes Risk Prediction",
      description:
        "A crucial healthcare diagnostic tool that uses Machine Learning to provide early warnings for diabetes. By employing Random Forest and K-Nearest Neighbors models with robust feature engineering, the system achieves an 84% accuracy rate, demonstrating the power of predictive analytics in proactive health management.",
      tags: ["Python", "Scikit-learn", "Machine Learning"],
      imageUrl: "https://placehold.co/600x400/0D0D0D/FFF?text=ML+Model",
      githubUrl:
        "https://drive.google.com/drive/folders/1WcwnOQjC_kCf3QtBbdu10tXQp75lHlHc?usp=sharing",
      liveUrl: "#",
    },
    {
      title: "InterConnect",
      description:
        "A prize-winning data storytelling project that visualizes the complex web of relationships and opinions within a campus community. Using ETL pipelines with BigQuery and an interactive Power BI dashboard, InterConnect transforms raw survey data into a compelling narrative, revealing actionable insights for improving student and faculty engagement.",
      tags: ["Power BI", "ETL", "BigQuery", "Data Visualization"],
      imageUrl: "https://placehold.co/600x400/0D0D0D/FFF?text=InterConnect",
      githubUrl:
        "https://drive.google.com/drive/folders/15mC4JnLKT4pJb5Dqf_wJ0H94SixWsBR0?usp=drive_link",
      liveUrl: "#",
    },
  ],
  achievements: [
    {
      title: "2nd Place, 'Turn Data into Stories' Exhibition",
      description:
        "Secured 2nd place among 15 teams for the InterConnect Project.",
      date: "Dec 18, 2024",
    },
    {
      title: "2nd Place, GENAI Project Exhibition",
      description:
        "Recognized for the 'EduGenie' project in the 'From Queries to Creativity - MongoDB & GenAI' event.",
      date: "May 31, 2025",
    },
    {
      title: "2nd Place in IoT Project Exhibition",
      description:
        "Awarded for excellence in the annual departmental IoT project showcase.",
    },
  ],
  certifications: [
    {
      name: "Juniper Networks Certified Associate, Cloud (JNCIA-Cloud)",
      issuer: "Juniper Networks",
      icon: () => (
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
          className="h-6 w-6 text-green-400"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
  ],
  testimonials: [
    {
      quote:
        "Pavan's technical expertise and collaborative spirit made a complex project feel effortless. He immediately understood our product goals and translated them into a beautifully optimized solution.",
      name: "Harsha K L",
      title: "Project Lead",
      image: "https://placehold.co/100x100/333/FFF?text=HKL",
    },
    {
      quote:
        "Working with Pavan was a game-changer. His innovative approach to data analysis provided critical insights that drove our strategy forward. Highly recommended!",
      name: "Eshwar R",
      title: "Colleague",
      image: "https://placehold.co/100x100/333/FFF?text=ER",
    },
    {
      quote:
        "Collaborating with Pavan was inspiring. His deep understanding of data science and attention to detail consistently delivered results beyond expectations. He’s a true asset to any team!",
      name: "Mohammed Amaan",
      title: "Colleague",
      image: "https://placehold.co/100x100/333/FFF?text=MA",
    },
  ],
};

export default portfolioData;
