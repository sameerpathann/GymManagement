import React from "react";

const DashboardCard = ({ data, id, userData }) => {
  return (
    <>
      <div
        className="w-full sm:w-[48%] md:w-[23%] lg:w-[20%] lg:h-[70%] md:h-[100%] h-auto  dashboard-card bg-[#fff] rounded-md cardShadow flex items-center gap-5 cursor-pointer hover:-translate-y-1 transition-all duration-[0.2s]"
        style={{ animationDelay: `${id * 0.2}s` }}
      >
        <div className="w-[80%] h-[100%] flex flex-col justify-center pl-4 sm:pl-8 md:pl-10">
          <h1 className="text-[3vw] sm:text-[1.4vw] md:text-[1.2vw] font-medium w-[80%] capitalize">
            {data.heading}
          </h1>
          <h1 className="text-[3.5vw] sm:text-[1.6vw] md:text-[1.4vw] font-bold">
            {data.value}
          </h1>
        </div>
        <div className="w-[18%] h-[100%] flex items-center justify-center pr-2">
          {data.icon()}
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
