import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const TrainerCard = ({ obj, total, handelTrainerDelete }) => {
  return (
    <div
      className={`w-full mt-2 bg-white relative cardShadow rounded-lg flex flex-col items-center justify-between p-5 sm:p-7 hover:bg-[#e5e4e4] transition-all duration-300 ease-in-out`}
    >
      {total ? (
        <div className="absolute top-0 right-3 flex gap-3">
          <Link
            to={`/EditTrainer/${obj.id}`}
            className="text-blue-500 hover:scale-110 transition-transform"
          >
            <BiEdit className="w-6 h-6" />
          </Link>
          <button
            onClick={() => handelTrainerDelete(obj.id)}
            className="text-red-500 hover:scale-110 transition-transform"
          >
            <MdDelete className="w-6 h-6" />
          </button>
        </div>
      ) : null}

      <div className="w-full h-auto rounded overflow-hidden">
        <img
          className="w-full h-auto object-cover object-center"
          src={obj.img}
          alt={obj.name}
        />
      </div>

      <div className="mt-4 w-full flex flex-col gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-[#ed563d]">
            {obj.title}
          </h4>
          <h1 className="text-lg sm:text-xl font-bold">{obj.name}</h1>
        </div>

        <p className="text-sm sm:text-base text-gray-600">{obj.description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span className="font-semibold text-sm sm:text-base">Contact:</span>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${obj.contact}&su=Inquiry&body=Hello, I would like to know more about your training programs.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            {obj.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
