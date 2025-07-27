import React, { useEffect, useRef, useState } from "react";

const projectData = [
  {
    title: "Minute Master",
    description:
      "Developed an innovative platform that automates the generation of meeting minutes using various machine learning techniques. Implemented advanced text summarization algorithms to extract key points and generate concise summaries from meeting transcripts.",
    tech: ["Machine Learning", "NLP", "Text Summarization", "Next"],
  },
  {
    title: "Resume Recommendation System",
    description:
      "Built a web interface using the concept of NLP, Restful APIs, and Machine learning to recommend and optimize resumes based on job descriptions.",
    tech: ["NLP", "REST API", "Machine Learning", "React"],
  },
  {
    title: "Web Text Classifier using Graph-Based k-NN",
    description:
      "Python-based web content classifier that scrapes, preprocesses, and classifies text using graph representations and MCS-based k-NN. Includes full evaluation pipeline.",
    tech: ["Python", "NLTK", "NetworkX", "Graph Theory", "ML"],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        } else {
          setIsSectionVisible(false);
          setVisibleCards([]);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trigger card animations when section is visible
  useEffect(() => {
    if (isSectionVisible) {
      projectData.forEach((_, i) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, i]);
        }, i * 200);
      });
    }
  }, [isSectionVisible]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-12 md:py-16 bg-gray-50 rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16 overflow-hidden will-change-transform transition-all duration-1000 ease-in-out transform ${
        isSectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } hover:shadow-xl hover:-translate-y-2`}
              style={{
                minHeight: "260px",
              }}
            >
              <div className="p-4 sm:p-5">
                <h6 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h6>
                <p className="text-gray-600 text-sm mb-3 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind helper for multiline truncate */}
      <style>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
