import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(() => setCardVisible(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`mt-20 py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16 overflow-hidden transition-all duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* Glowing BG Circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 opacity-30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Heading with fade animation */}
        <h2
          className={`text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800 tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Let's <span className="text-blue-600">Connect</span>
        </h2>

        {/* Contact Cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
          {[
            {
              icon: "bi-envelope-fill",
              text: "rehmanabdur643@gmail.com",
              href: "mailto:rehmanabdur643@gmail.com",
              colSpan: "col-span-1",
            },
            {
              icon: "bi-telephone-fill",
              text: "+92 311 7796355",
              href: "tel:+923117796355",
              colSpan: "col-span-1",
            },
            {
              icon: "bi-geo-alt-fill",
              text: "Lahore, Pakistan",
              href: null,
              colSpan: "col-span-1 sm:col-span-2",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-5 bg-white border border-blue-100 shadow-md rounded-2xl transition-all duration-700 transform ${
                cardVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } hover:shadow-xl hover:scale-[1.02] ${item.colSpan}`}
              style={{ transitionDelay: `${i * 150}ms`, minHeight: "110px" }}
            >
              <div className="flex items-center justify-center w-11 h-11 bg-blue-100 text-blue-600 rounded-full shadow text-xl sm:text-2xl">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <div className="flex-1">
                {item.href ? (
                  <a
                    href={item.href}
                    className="block text-blue-800 font-medium text-sm break-words"
                    style={{
                      wordBreak: "break-word",
                      textDecoration: "none",
                    }}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-700 font-medium">{item.text}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div
          className={`mt-10 flex justify-center gap-6 transition-all duration-700 ${
            cardVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
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
