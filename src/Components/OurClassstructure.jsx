import dumbelimg from "../assets/tabs-first-icon.png";
import classDetails from "./Hardcore/ClassDetails";
const OurClassstructure = ({ isClick, setIsClick }) => {
  return classDetails.map((obj, i) => {
    return (
      <div onClick={() => setIsClick(i)} key={i} className="w-[100%] h-[6vw]">
        <div className="w-[100%] h-[100%] flex items-center gap-5 bg-[white] box-shadow cursor-pointer px-[2vw]">
          <img src={dumbelimg} width={"11%"} height={"100%"} alt="" />
          <h1
            className={`text-[1.6vw] transition-colors duration-[0.3s] font-semibold ${
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
