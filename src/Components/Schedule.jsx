import React from "react";
import lineimg from "../assets/line-dec.png";
import Scheduleimg from "../assets/schedule-bg.jpg";
const Schedule = () => {
  return (
    <div className="w-[100%] min-h-[150vh] bg-red-400">
      <div
        style={{}}
        className="h-[100%] w-[100%] relative flex flex-col items-center"
      >
        <img
          src={Scheduleimg}
          className="w-[100%] h-[150vh] object-center object-cover"
          alt=""
        />
        <div className="w-[50%] h-[20%]  flex flex-col items-center gap-4 absolute top-0 py-8 mt-10">
          <h1 className="text-[2.2vw] font-bold uppercase text-[#ed563d]">
            <span className="text-white">Classes</span> Schedule
          </h1>
          <img className="w-[8%]" src={lineimg} alt="" />
          <p className="text-[1.2vw] w-[85%] text-center text-white">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
        </div>
        <div className="w-[100%] h-[6%] flex items-center justify-center absolute top-[30%]">
          <div className="w-[50%] h-[100%] flex items-center gap-2 justify-center">
            <h4 className="text-[1.2vw] text-[#ed563d] font-semibold cursor-pointer">
              Monday
            </h4>
            <span className="text-white">/</span>
            <h4 className="text-[1.2vw] text-white transition-colors duration-[0.3s] ease-in cursor-pointer font-semibold hover:text-[#ed564d]">
              Tuesday
            </h4>
            <span className="text-white">/</span>
            <h4 className="text-[1.2vw] text-white transition-colors duration-[0.3s] ease-in cursor-pointer font-semibold hover:text-[#ed564d]">
              Wednesday
            </h4>
            <span className="text-white">/</span>
            <h4 className="text-[1.2vw] text-white transition-colors duration-[0.3s] ease-in cursor-pointer font-semibold hover:text-[#ed564d]">
              Thursday
            </h4>
            <span className="text-white">/</span>
            <h4 className="text-[1.2vw] text-white transition-colors duration-[0.3s] ease-in cursor-pointer font-semibold hover:text-[#ed564d]">
              Friday
            </h4>
          </div>
        </div>
        <div className="w-[100%] h-[60%]  flex items-center justify-center absolute top-[35%]">
          <div className="w-[70%] h-[90%]">
            <table className="table-auto w-[100%] h-[100%] border-table ">
              <thead>
                <tr className="border-table">
                  <th className="text-[1.2vw] text-white w-[20%] py-5 md:py-10 border-table">
                    Fitness Class
                  </th>
                  <th
                    className="text-[1.2vw] text-white w-[20%] border-table
                  "
                  >
                    10:00AM - 11:30AM
                  </th>
                  <th className="w-[20%] border-table"></th>
                  <th className="text-[1.2vw] text-white w-[20%] border-table">
                    William G. Stewart
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-table">
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Muscle Traning
                  </td>
                  <td className="text-[1.2vw] border-table font-semibold text-white w-[20%]"></td>
                  <td className="text-[1.2vw] border-table font-semibold text-white w-[20%]"></td>
                  <td className="text-[1.2vw] border-table font-semibold text-white w-[20%] text-center">
                    Paul D. Newman
                  </td>
                </tr>
                <tr>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Body Building
                  </td>
                  <td className="text-[1.2vw] h-[10%]  border-table font-semibold text-white w-[20%]"></td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    2:00PM - 3:30PM
                  </td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Boyd C. Harris
                  </td>
                </tr>
                <tr>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Yoga Training Class
                  </td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%]"></td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center"></td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Hector T. Daigle
                  </td>
                </tr>
                <tr>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Advance Training
                  </td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%]"></td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center"></td>
                  <td className="text-[1.2vw] h-[10%] border-table font-semibold text-white w-[20%] text-center">
                    Bret D. Bowers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
