import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const NewTrrainerForm = ({
  handelAddtrainer,
  newTrainer,
  setNewTrainer,
  isEditMode = false,
  trainerDetails = [],
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const trainer = trainerDetails.trainers.find(
        (trainer) => trainer.id === parseInt(id)
      );
      if (trainer) {
        setNewTrainer(trainer);
      }
    }
  }, [id, trainerDetails, setNewTrainer]);
  return (
    <div className="w-full bg-zinc-300 h-screen flex items-center justify-center pt-5">
      <div className="w-[30%] bg-white pt-6 br rounded-lg overflow-hidden h-[75%]">
        <h1
          className="text-[1.5vw] font-semibold text-center
        "
        >
          Please Enter New Trainer Details
        </h1>
        <form
          onSubmit={(e) => {
            handelAddtrainer(e);
          }}
          className="items-center w-full flex flex-col gap-4 pt-5 h-full"
        >
          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, name: e.target.value })
            }
            value={newTrainer.name}
            type="text"
            placeholder="Enter Trainer Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-2 focus:ring-blue-400 outline-none focus:border-none"
          />{" "}
          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, title: e.target.value })
            }
            value={newTrainer.title}
            type="text"
            placeholder="Enter Trainer Role"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, img: e.target.value })
            }
            value={newTrainer.img}
            type="url"
            placeholder="Enter Trainer imgUrl"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />{" "}
          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, description: e.target.value })
            }
            value={newTrainer.description}
            type="text"
            placeholder="Enter Trainer Description"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, contact: e.target.value })
            }
            value={newTrainer.contact}
            type="email"
            placeholder="Enter Trainer Email"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-[35%] rounded-lg h-[10%] bg-[rgb(75,75,75)] text-white font-semibold"
          >
            {isEditMode ? "Edit Trainer" : "Add Trainer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTrrainerForm;
