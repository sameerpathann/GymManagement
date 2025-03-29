import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const TrainerCard = ({ obj, total, handelTrainerDelete }) => {
  return (
    <>
      <div
        className={`${
          total == 10 ? `w-[100%]` : `w-[32%]`
        } bg-[#ffff] relative cardShadow h-[100%] rounded flex flex-col items-center justify-between px-7 py-10 cursor-pointer hover:bg-[#e5e4e4] transition-all duration-[0.3s] ease-in-out break-inside-avoid`}
      >
        {total ? (
          <div className="w-[100%] h-[6%] flex items-center justify-end gap-2 absolute top-0 right-0">
            <div className="w-[15%] h-full flex items-center justify-center">
              <Link className="w-[60%]" to={`/EditTrainer/${obj.id}`}>
                <BiEdit
                  className="font-bold w-[100%] cursor-pointer h-[100%]"
                  color="rgb(59,130,246)"
                />
              </Link>
            </div>
            <div
              onClick={() => handelTrainerDelete(obj.id)}
              className="w-[15%] h-full flex items-center justify-center"
            >
              <MdDelete
                className="font-bold w-[60%] cursor-pointer h-[100%]"
                color="red"
              />
            </div>
            <div></div>
          </div>
        ) : (
          ""
        )}
        <div className="w-[100%] h-[45%] rounded overflow-hidden">
          <img
            className="w-[100%] h-auto object-cover object-center"
            src={obj.img}
            alt=""
          />
        </div>
        <div className="h-[55%] mt-4 w-[100%] flex flex-col gap-5">
          <div className="w-[100%] h-[23%] flex flex-col justify-between">
            <h4 className="text-[1.1vw] font-semibold text-[#ed563d]">
              {obj.title}
            </h4>
            <h1 className="text-[1.5vw] font-semibold">{obj.name}</h1>
          </div>
          <div className="w-[100%] h-[42%] flex">
            <p className="text-[1.2vw] w-[99%] text-[gray] break-words">
              {obj.description}
            </p>
          </div>
          <div className="w-[100%] h-[15%] flex items-center gap-3">
            <h1 className="text-[1.2vw] capitalize font-semibold">
              Contact :{" "}
              <a
                className="text-[gray] hover:text-[#000] transition-colors duration-[0.1s] ease-in"
                href={`https://mail.google.com/mail/?view=cm&to=${obj.contact}&su=Inquiry&body=Hello, I would like to know more about your training programs.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {obj.name}
              </a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerCard;
