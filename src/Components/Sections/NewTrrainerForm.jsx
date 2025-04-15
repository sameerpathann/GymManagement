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
    <div className="w-full min-h-screen bg-zinc-300 flex items-center justify-center p-4">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white sm:mt-8 mt-10 pt-6 rounded-lg overflow-hidden">
        <h1 className="text-xl md:text-[1.5vw] font-semibold text-center px-4">
          Please Enter New Trainer Details
        </h1>

        <form
          onSubmit={(e) => {
            handelAddtrainer(e);
          }}
          className="w-full flex flex-col items-center gap-4 py-6"
        >
          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, name: e.target.value })
            }
            value={newTrainer.name}
            type="text"
            placeholder="Enter Trainer Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, title: e.target.value })
            }
            value={newTrainer.title}
            type="text"
            placeholder="Enter Trainer Role"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, img: e.target.value })
            }
            value={newTrainer.img}
            type="url"
            placeholder="Enter Trainer imgUrl"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, description: e.target.value })
            }
            value={newTrainer.description}
            type="text"
            placeholder="Enter Trainer Description"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewTrainer({ ...newTrainer, contact: e.target.value })
            }
            value={newTrainer.contact}
            type="email"
            placeholder="Enter Trainer Email"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%] h-10 bg-[rgb(75,75,75)] text-white font-semibold rounded-lg transition-all hover:bg-[rgb(95,95,95)]"
          >
            {isEditMode ? "Edit Trainer" : "Add Trainer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTrrainerForm;
