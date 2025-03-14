import React from "react";
import img from "../assets/contact-bg.jpg";
const Footer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] mt-16">
        <div className="w-[100%] h-[85%]  flex items-center justify-center">
          <div className="w-[50%] h-[100%] bg-blue-300">
            <iframe
              className="w-[100%] h-[100%]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14903.664597501504!2d75.8881010852648!3d22.691283826076344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741259716592!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="w-[50%] h-[100%] relative">
            <img
              className="w-[100%] h-[100%] object-cover object-center"
              src={img}
              alt=""
            />
            <div className="absolute w-[80%] h-[80%] bg-white top-[50%] left-[50%] rounded -translate-x-[50%] -translate-y-[50%]">
              <form
                className="w-[100%] h-[100%]  px-10 py-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="w-[100%] h-[14%]  flex justify-between">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border w-[47%] border-[gray] text-[1.2vw] text-[gray] px-1 py-1 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="border border-[gray] text-[1.2vw] text-[gray] px-1 py-1 w-[47%] outline-none"
                  />
                </div>
                <div className="w-[100%] h-[86%]  mt-2 flex justify-around flex-col">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border w-[100%] border-[gray] text-[1.2vw] text-[gray] px-1 py-1 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="message"
                    className="border w-[100%] h-[60%] border-[gray] text-[1.2vw] text-[gray] px-1 outline-none"
                  />
                  <button className="px-3 py-3 bg-[#ed563d] text-white uppercase text-[1vw] border-none outline-none  font-semibold cursor-pointer transition-colors duration-[0.2s] hover:bg-[#ed6d57] w-1/3">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-center h-[15%]">
          <p className="text-[1.1vw] w-[33%] text-center">
            Copyright © 2020 Training Studio - Designed by{" "}
            <span className="text-[#ed563d] cursor-pointer"> TemplateMo</span>{" "}
            Distributed by
            <span className="text-[#ed563d] cursor-pointer"> ThemeWagon</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
