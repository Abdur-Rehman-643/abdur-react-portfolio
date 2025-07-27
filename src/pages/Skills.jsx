// import React, { useRef, useState, useEffect } from "react";

// // Skills data
// const skillsData = {
//   technical: [
//     // Languages
//     "C++",
//     "Java",
//     "Python",
//     "JavaScript",
//     "C#",

//     // Web & Application Development
//     "MERN Stack",
//     "ASP.NET",
//     "WPF",
//     "Windows Forms",

//     // AI / Data Science
//     "NumPy",
//     "Pandas",
//     "Matplotlib",
//     "Scikit-learn",
//     "TensorFlow",

//     // Databases
//     "MySQL",
//     "SQL Server",

//     // Cloud & DevOps
//     "AWS (Basics)",
//     "Docker",
//     "Kubernetes",

//     // Tools & Others
//     "Git",
//     "Linux",
//     "LaTeX",
//   ],
//   soft: [
//     "Effective Communication",
//     "Problem-Solving",
//     "Adaptability",
//     "Time Management",
//     "Attention to Detail",
//     "Project Management",
//     "Creativity",
//     "Service Focused",
//   ],
// };

// // Skill tag with custom inline animation
// const SkillTag = ({ skill, delay }) => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setVisible(true);
//     }, delay);
//     return () => clearTimeout(timeout);
//   }, [delay]);

//   return (
//     <span
//       className="inline-flex items-center border border-gray-200 text-sm sm:text-base px-4 py-2 rounded-full shadow transition-transform duration-300 transform hover:scale-110"
//       style={{
//         margin: "6px",
//         backgroundColor: visible ? "#ffffff" : "transparent",
//         color: visible ? "#1f2937" : "transparent",
//         opacity: visible ? 1 : 0,
//         transform: visible ? "scale(1)" : "scale(0.8)",
//         transition: "all 0.4s ease",
//         cursor: "default",
//       }}
//       onMouseEnter={(e) => {
// e.currentTarget.style.backgroundColor = "#2563eb"; // blue-600
// e.currentTarget.style.color = "#ffffff";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.backgroundColor = "#ffffff";
//         e.currentTarget.style.color = "#1f2937";
//       }}
//     >
//       {skill}
//     </span>
//   );
// };

// // Main Skills section
// const Skills = () => {
//   const skillsRef = useRef(null);
//   const [showTags, setShowTags] = useState(false);

//   // Detect scroll into view
//   useEffect(() => {
//     const handleScroll = () => {
//       if (skillsRef.current) {
//         const rect = skillsRef.current.getBoundingClientRect();
//         const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
//         if (inViewport) {
//           setShowTags(false); // Reset first
//           setTimeout(() => setShowTags(true), 100); // Trigger re-animate
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Check on load
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       id="skills"
//       ref={skillsRef}
//       className="mt-30 py-10 bg-gray-50 rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//           My <span className="text-blue-600">Skills</span>
//         </h2>

//         {/* Technical Skills */}
//         <div className="mt-8 mb-8 text-center">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-6">
//             Technical Skills
//           </h3>
//           <div className="flex flex-wrap justify-center">
//             {showTags &&
//               skillsData.technical.map((skill, index) => (
//                 <SkillTag skill={skill} key={index} delay={index * 80} />
//               ))}
//           </div>
//         </div>

//         {/* Soft Skills */}
//         <div className="text-center">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-6">
//             Soft Skills
//           </h3>
//           <div className="flex flex-wrap justify-center">
//             {showTags &&
//               skillsData.soft.map((skill, index) => (
//                 <SkillTag
//                   skill={skill}
//                   key={index}
//                   delay={(index + skillsData.technical.length) * 80}
//                 />
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useEffect, useRef, useState } from "react";

const skillsData = {
  technical: [
    "C++",
    "Java",
    "Python",
    "JavaScript",
    "C#",
    "MERN Stack",
    "ASP.NET",
    "WPF",
    "Windows Forms",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "MySQL",
    "SQL Server",
    "AWS (Basics)",
    "Docker",
    "Kubernetes",
    "Git",
    "Linux",
    "LaTeX",
  ],
  soft: [
    "Effective Communication",
    "Problem-Solving",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Project Management",
    "Creativity",
    "Service Focused",
  ],
};

const SkillTag = ({ skill }) => (
  <span
    className="inline-flex items-center text-sm sm:text-base px-4 py-2 rounded-full border border-gray-200 text-gray-800 shadow transition-all duration-300 transform"
    style={{
      margin: "6px",
      backgroundColor: "#ffffff",
      cursor: "default",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#2563eb";
      e.currentTarget.style.color = "#ffffff";
      e.currentTarget.style.transform = "scale(1.1)";
      e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 99, 235, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#ffffff";
      e.currentTarget.style.color = "#1f2937";
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
    }}
  >
    {skill}
  </span>
);

const Skills = () => {
  const skillsRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  const [headingVisible, setHeadingVisible] = useState(false);
  const [subHeadingVisible, setSubHeadingVisible] = useState(false);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => setHeadingVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const subHeadingObserver = new IntersectionObserver(
      ([entry]) => setSubHeadingVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (subHeadingRef.current)
      subHeadingObserver.observe(subHeadingRef.current);

    return () => {
      headingObserver.disconnect();
      subHeadingObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="mt-30 py-10 bg-gray-50 rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16"
    >
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-1000 transform ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          My <span className="text-blue-600">Skills</span>
        </h2>

        {/* Technical Skills Heading with animation */}
        <div className="mt-8 mb-8 text-center">
          <h3
            ref={subHeadingRef}
            className={`text-xl sm:text-2xl font-semibold mb-6 transition-all duration-1000 transform ${
              subHeadingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Technical Skills
          </h3>
          <div className="mt-3 flex flex-wrap justify-center">
            {skillsData.technical.map((skill, index) => (
              <SkillTag skill={skill} key={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3
            ref={subHeadingRef}
            className={`text-xl sm:text-2xl font-semibold mb-6 transition-all duration-1000 transform ${
              subHeadingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Soft Skills
          </h3>
          <div className="mt-3 flex flex-wrap justify-center">
            {skillsData.soft.map((skill, index) => (
              <SkillTag skill={skill} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
