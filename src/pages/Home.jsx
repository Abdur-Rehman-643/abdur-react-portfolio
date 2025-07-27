import { useEffect, useRef, useState } from "react";
import profileImage from "../assets/img3.png";

function Home() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle animation class based on visibility
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="mt-28 pt-24 pb-20 md:pt-32 md:pb-28 mx-4 md:mx-8 
             bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200
             rounded-[2rem] shadow-md border border-blue-100 
             transition-all duration-500 hover:shadow-lg"
        style={{ fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Text Block */}
            <div
              className={`md:w-1/2 text-center md:text-left ${
                animate ? "animate-slideInLeft" : ""
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600 animate-pulse">
                  Abdur Rehman
                </span>
              </h1>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-700 mb-6">
                Associate Software Engineer
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                Motivated Computer Science graduate with a strong academic
                background and hands-on experience gained through internships
                and personal projects. Seeking to apply my skills in software
                development and AI to contribute meaningfully to innovative and
                impactful projects.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <a
                  href="/#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
                  style={{ textDecoration: "none" }}
                >
                  Contact Me
                </a>

                <a
                  href="/Abdur_Rehman_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-700 font-medium rounded-lg bg-white hover:bg-blue-100 transition-transform duration-300 transform hover:scale-105 relative overflow-hidden shadow-md hover:shadow-lg"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="/download_icon.svg"
                    alt="Download Icon"
                    className="w-5 h-5 animate-bounce"
                  />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Image Block */}
            <div
              className={`md:w-1/2 hidden md:flex justify-center ${
                animate ? "animate-slideInRight" : ""
              }`}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-500 hover:rotate-3">
                <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover", borderRadius: "9999px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Keyframes */}
        <style>
          {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out both;
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

export default Home;
