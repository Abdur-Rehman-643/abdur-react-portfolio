import React, { useRef, useEffect, useState } from "react";

// Experience data
const experiences = [
  {
    role: "Data Science Intern",
    company: "NETSOL TECHNOLOGIES",
    location: "Lahore, Punjab",
    date: "Aug 2024 - Sep 2024",
    technologies: "Python, TensorFlow, Scikit-learn, NumPy, Pandas, Matplotlib",
    points: [
      "Gained exposure to advanced AI and machine learning concepts including CNNs, RNNs, LSTMs, and GANs.",
      "Strengthened knowledge of AI models and practical applications through hands-on projects.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "TIERS LIMITED",
    location: "Remote",
    date: "Jun 2024 - Aug 2024",
    technologies:
      "MongoDB, Express.js, React, Node.js, JavaScript, HTML, CSS, Git",
    points: [
      "Developed and maintained web applications using the MERN stack.",
      "Contributed to coding, debugging, and enhancing full-stack features.",
      "Gained experience with modern web tech and collaborative workflows.",
    ],
  },
];

// Individual experience card
const ExperienceCard = ({ experience, delay, isVisible }) => (
  <div
    className={`bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm transition-all duration-500 transform hover:-translate-y-1 hover:shadow-md ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
    style={{
      transitionDelay: `${delay}s`,
    }}
  >
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {experience.role}
      </h3>
      <span className="text-gray-500 text-xs sm:text-sm font-medium">
        {experience.date} | {experience.location}
      </span>
    </div>

    <h4 className="text-gray-600 font-medium mb-2 text-sm sm:text-base">
      {experience.company}
    </h4>

    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
      {experience.points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>

    <p className="mt-2 text-xs text-blue-500 font-semibold">
      Technologies:{" "}
      <span className="text-gray-700 font-normal">
        {experience.technologies}
      </span>
    </p>
  </div>
);

// Experience section
const Experience = () => {
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Visibility logic on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inView);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="mt-20 py-16 bg-white rounded-t-3xl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-12 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Work <span className="text-blue-600">Experience</span>
        </h2>
        <div className="mt-10 space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              delay={index * 0.2}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
