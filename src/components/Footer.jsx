import React, { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    footer.classList.add("opacity-0", "translate-y-10");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("animate-fade-in-up");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="mt-0 mb-0 bg-gray-900 text-white py-4 px-4 sm:px-6 lg:px-8 transition-all duration-1000"
    >
      <div className="container mx-auto">
        <div className="row items-center text-center md:text-left">
          <div className="col-md-4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold tracking-wide">Abdur Rehman</h3>
            <p className="text-xs text-gray-400 mt-1">
              Associate Software Engineer
            </p>
          </div>
          <div className="col-md-8">
            <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs sm:text-sm">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="capitalize transition duration-300 ease-in-out hover:text-white"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs text-gray-500">
          © 2025 <span className="text-white">Abdur Rehman</span>. All rights
          reserved.
        </div>
      </div>

      {/* Internal Styles */}
      <style>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 1s ease, transform 1s ease;
        }

        footer a {
          position: relative;
        }

        footer a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: #fff;
          transition: width 0.3s ease;
        }

        footer a:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
