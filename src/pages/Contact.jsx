import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`mt-20 mb-0 relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* Glowing Circle BG */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 opacity-30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">
          Let's <span className="text-blue-600">Connect</span>
        </h2>

        {/* Contact Cards */}
        <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center items-stretch text-sm sm:text-base">
          {/* Email */}
          <div className="flex flex-1 items-center gap-4 p-4 bg-white shadow-md hover:shadow-xl transition-all duration-500 rounded-lg hover:scale-[1.02]">
            <i className="bi bi-envelope-fill text-blue-600 text-xl sm:text-2xl"></i>
            <a
              href="mailto:rehmanabdur643@gmail.com"
              className="text-blue-800 text-sm sm:text-base"
              style={{ textDecoration: "none" }}
            >
              rehmanabdur643@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-1 items-center gap-4 p-4 bg-white shadow-md hover:shadow-xl transition-all duration-500 rounded-lg hover:scale-[1.02]">
            <i className="bi bi-telephone-fill text-blue-600 text-xl sm:text-2xl"></i>
            <a
              href="tel:+923117796355"
              className="text-blue-800 text-sm sm:text-base"
              style={{ textDecoration: "none" }}
            >
              +92 311 7796355
            </a>
          </div>

          {/* Location */}
          <div className="w-full flex items-center justify-center gap-4 p-4 bg-white shadow-md hover:shadow-xl transition-all duration-500 rounded-lg hover:scale-[1.02]">
            <i className="bi bi-geo-alt-fill text-blue-600 text-xl sm:text-2xl"></i>
            <span className="text-gray-700 text-sm sm:text-base">
              Lahore, Pakistan
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/Abdur-Rehman-643"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white shadow-lg rounded-full text-gray-800 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            <i className="bi bi-github text-lg sm:text-xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/abdur-rehman-0a3186278"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white shadow-lg rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            <i className="bi bi-linkedin text-lg sm:text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </section>
  );
};

export default Contact;
