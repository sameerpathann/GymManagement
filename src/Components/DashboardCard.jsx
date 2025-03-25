import React from "react";

const DashboardCard = ({ data, id }) => {
  return (
    <>
      <div
        className="w-[20%] h-[100%] dashboard-card bg-[#fff] rounded-md cardShadow flex items-center gap-5 cursor-pointer hover:-translate-y-1 transition-all duration-[0.2s]"
        style={{ animationDelay: `${id * 0.2}s` }}
      >
        <div className="w-[80%] h-[100%] flex flex-col justify-center pl-10">
          <h1 className="text-[1.4vw] font-medium w-[80%] capitalize">
            {data.heading}
          </h1>
          <h1 className="text-[1.6vw] font-bold">{data.value}</h1>
        </div>
        <div className="w-[18%] h-[100%] flex items-center justify-center pr-2">
          {data.icon()}
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
