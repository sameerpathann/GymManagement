import dumbelimg from "../assets/tabs-first-icon.png";
import classDetails from "./Hardcore/ClassDetails";

const OurClassstructure = ({ isClick, setIsClick }) => {
  return classDetails.map((obj, i) => {
    return (
      <div
        onClick={() => setIsClick(i)}
        key={i}
        className="w-full h-auto sm:h-[6vw]"
      >
        <div className="w-full h-full flex items-center gap-4 sm:gap-5 bg-white box-shadow cursor-pointer px-4 sm:px-[2vw] py-4 sm:py-3">
          <img
            src={dumbelimg}
            alt=""
            className="w-[4%] sm:w-[10%] md:w-[11%] h-auto object-contain"
          />
          <h1
            className={`text-[1.6vw] sm:text-[1.4vw] md:text-[1.5vw] font-semibold transition-colors duration-300 ${
              isClick === i ? `text-[#ed563d]` : `text-black`
            }`}
          >
            {obj.heading}
          </h1>
        </div>
      </div>
    );
  });
};

export default OurClassstructure;
