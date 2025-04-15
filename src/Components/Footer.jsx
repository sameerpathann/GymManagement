import React from "react";
import img from "../assets/contact-bg.jpg";

const Footer = () => {
  return (
    <div className="w-full mt-16 flex flex-col gap-10">
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[85vh]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14903.664597501504!2d75.8881010852648!3d22.691283826076344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741259716592!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-full lg:w-1/2 relative h-auto lg:h-[85vh] flex items-center justify-center">
          <img
            src={img}
            alt=""
            className="absolute w-full h-full object-cover object-center z-0"
          />
          <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] bg-white rounded-lg p-5 sm:p-8 shadow-md">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-400 text-gray-600 px-3 py-2 w-full sm:w-1/2 text-sm sm:text-base outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-400 text-gray-600 px-3 py-2 w-full sm:w-1/2 text-sm sm:text-base outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-400 text-gray-600 px-3 py-2 w-full text-sm sm:text-base outline-none"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="border border-gray-400 text-gray-600 px-3 py-2 w-full resize-none text-sm sm:text-base outline-none"
              />
              <button className="bg-[#ed563d] text-white px-4 py-2 sm:px-6 sm:py-3 w-1/2 sm:w-1/3 text-sm sm:text-base font-semibold uppercase hover:bg-[#ed6d57] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full py-6 bg-white flex justify-center items-center">
        <p className="text-center text-xs sm:text-sm md:text-base px-4 max-w-[600px] leading-relaxed">
          Copyright © 2020 Training Studio - Designed by{" "}
          <span className="text-[#ed563d] cursor-pointer">TemplateMo</span>{" "}
          Distributed by{" "}
          <span className="text-[#ed563d] cursor-pointer">ThemeWagon</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
