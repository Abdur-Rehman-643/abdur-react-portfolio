import React, { useEffect, useRef, useState } from "react";

const projectData = [
  {
    title: "Final Year Project: FruitMate - Smart Market Assistant System",
    description:
      "Designed and implemented a system for automated fruit/vegetable identification, real-time weighing, pricing, and smart receipt generation, aimed at improving efficiency and customer experience in traditional markets.",
    tech: ["Computer Vision", "IoT Sensors", "Load Cell", "Arduino"],
  },
  {
    title: "My Riding App",
    description:
      "A secure real-time ride-booking platform with OTP-based ride verification and live status tracking for passengers and drivers.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
  },
  {
    title: "Hotel Booking System",
    description:
      "A full-featured hotel management platform with a guest booking portal and admin dashboard for managing rooms, bookings, employees, revenue, and reviews. Integrated secure Stripe payments.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
  },
  {
    title: "Urdu Text Summarization Model",
    description:
      "Fine-tuned google/mt5-small model on XL-Sum Urdu dataset for abstractive text summarization.",
    tech: ["PyTorch", "Transformers", "XL-Sum Urdu Dataset"],
  },
  {
    title: "Student Alumni System",
    description:
      "Developed both desktop and web-based systems for managing alumni records using SQL database integration.",
    tech: ["C#", "ASP.NET", "WPF", "SQL"],
  },
  {
    title: "Web Text Classifier using Graph-Based k-NN",
    description:
      "Python-based text classification system that scrapes, preprocesses, and classifies content using graph representations and MCS-based k-NN.",
    tech: [
      "Python",
      "NLTK",
      "NetworkX",
      "scikit-learn",
      "BeautifulSoup",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    title: "Inventory Management System",
    description:
      "Developed an inventory tracking system for optimizing stock management using Windows Forms and SQL.",
    tech: ["C#", "Windows Forms", "SQL"],
  },
  {
    title: "Operating System Simulation",
    description:
      "Created an OS simulator demonstrating multitasking and resource allocation, built in C++ for Linux.",
    tech: ["Linux", "C++"],
  },
  {
    title: "DOS Utility Tool",
    description:
      "Built a utility in x86 Assembly for basic DOS operations like file I/O, time/date display, and text-based interaction.",
    tech: ["Assembly (x86)", "MASM", "DOS"],
  },
  {
    title: "Shortest Path Finder",
    description:
      "Implemented Dijkstra’s algorithm to compute shortest paths across graph nodes in a C++ system using STL.",
    tech: ["C++", "STL"],
  },
  {
    title: "Digital Bazar",
    description:
      "Java Swing–based desktop marketplace for buying, selling, and renting products with history tracking and filters.",
    tech: ["Java", "Java Swing"],
  },
  {
    title: "Payroll Management System",
    description:
      "Console application to manage employee salaries and generate monthly salary slips using file handling in C++.",
    tech: ["C++"],
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

  // Animate cards one by one
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
      className="py-12 md:py-16 bg-gray-50 rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16 overflow-hidden"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Animation */}
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight transition-all duration-700 ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
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
                transitionDelay: `${index * 150}ms`,
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
