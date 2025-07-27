import { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="mt-28 py-5 md:py-28 px-4 md:px-10 bg-white overflow-hidden rounded-[2rem] shadow-md mx-4 md:mx-8"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 ${
              isVisible ? "animate-fadeIn" : ""
            }`}
          >
            About <span className="text-blue-600 bg-clip-text">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start justify-between gap-16 px-4 md:px-8 w-full mx-auto">
            {/* Left: Text */}
            <div
              className={`w-full md:w-2/3 ${
                isVisible ? "animate-slideInRight" : ""
              }`}
            >
              <h3
                className={`mt-4 text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 ${
                  isVisible ? "animate-fadeInUp" : ""
                }`}
              >
                Who am I?
              </h3>
              <p
                className={`text-base sm:text-lg text-gray-600 mb-10 leading-relaxed ${
                  isVisible ? "animate-fadeInUp" : ""
                }`}
              >
                I'm Abdur Rehman, a passionate Computer Science graduate from
                UET Lahore with a strong interest in web development, software
                engineering, and AI. Eager to build real-world solutions, I have
                developed my skills through academic projects and internships,
                and I’m enthusiastic about contributing to innovative and
                impact-driven teams.
              </p>

              {/* Education */}
              <h4
                className={`mt-10 text-xl sm:text-2xl font-semibold text-gray-800 mb-6 ${
                  isVisible ? "animate-fadeInUp" : ""
                }`}
              >
                Education
              </h4>
              <div className="space-y-6">
                {[
                  {
                    title: "BSc Computer Science",
                    subtitle:
                      "University of Engineering & Technology Lahore (2021–2025)",
                    detail: "CGPA: 3.8/4.0",
                  },
                  {
                    title: "Intermediate in Computer Science",
                    subtitle: "Punjab Group of Colleges, Lahore (2019–2021)",
                    detail: "94.36%",
                  },
                ].map((edu, i) => (
                  <div
                    key={i}
                    className={`relative pl-6 border-l-2 border-blue-200 hover:border-blue-600 transition duration-300 ${
                      isVisible ? "animate-fadeInUp" : ""
                    }`}
                  >
                    <div className="absolute -left-3 w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow-md hover:scale-125 transition duration-300"></div>
                    <h5 className="text-base sm:text-lg font-medium text-gray-800">
                      {edu.title}
                    </h5>
                    <p className="text-sm sm:text-base text-gray-500">
                      {edu.subtitle} —{" "}
                      <span className="font-semibold">{edu.detail}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Links */}
              <div
                className={`mt-12 flex flex-wrap gap-4 justify-start ${
                  isVisible ? "animate-fadeInUp" : ""
                }`}
              >
                {[
                  {
                    href: "mailto:rehmanabdur643@gmail.com",
                    icon: "bi-envelope-fill",
                    label: "Email",
                  },
                  {
                    href: "tel:+923117796355",
                    icon: "bi-telephone-fill",
                    label: "+92 311 7796355",
                  },
                  {
                    href: "https://www.linkedin.com/in/abdur-rehman-0a3186278",
                    icon: "bi-linkedin",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/Abdur-Rehman-643",
                    icon: "bi-github",
                    label: "GitHub",
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow text-gray-700 hover:text-blue-600 text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      className={`bi ${link.icon} text-blue-600 text-lg group-hover:scale-110 transition-transform duration-300`}
                    ></i>
                    <span className="relative z-10">
                      {link.label}
                      <span className="block h-[1.5px] w-0 group-hover:w-full bg-blue-500 transition-all duration-300 mt-0.5 rounded"></span>
                    </span>
                    <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg z-0"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(40px); }
              to { opacity: 1; transform: translateX(0); }
            }

            .animate-fadeIn {
              animation: fadeIn 0.6s ease-out both;
            }

            .animate-fadeInUp {
              animation: fadeInUp 0.7s ease-out both;
            }

            .animate-slideInRight {
              animation: slideInRight 0.8s ease-out both;
            }
          `}
        </style>
      </section>
    </>
  );
}

export default About;
