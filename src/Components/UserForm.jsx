import React, { useEffect } from "react";
import Plan from "./Hardcore/Userplan";
import { useParams } from "react-router-dom";

const UserForm = ({
  newUser,
  setNewUser,
  handelAddUser,
  userData = { Data: [] },
  editMode = false,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = userData?.Data?.find((user) => user.id === parseInt(id));
      if (user) {
        setNewUser(user);
      }
    }
  }, [userData, setNewUser, id]);

  return (
    <div className="w-full min-h-screen bg-zinc-300 flex items-center justify-center p-4">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white pt-6 sm:mt-8 mt-10  rounded-lg overflow-hidden">
        <h1 className="text-xl md:text-[1.5vw] font-semibold text-center px-4">
          Please Enter New User Details
        </h1>

        <form
          onSubmit={(e) => handelAddUser(e)}
          className="w-full flex flex-col items-center gap-4 py-6"
        >
          <input
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            type="text"
            placeholder="Enter User's Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            value={newUser.email}
            type="email"
            placeholder="Enter User's Email"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <select
            onChange={(e) =>
              setNewUser({ ...newUser, membershipType: e.target.value })
            }
            value={newUser.membershipType}
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          >
            <option value="">Select User Plan</option>
            {Plan.memberShip.map((membership, i) => (
              <option key={i} value={membership}>
                {membership}
              </option>
            ))}
          </select>

          <input
            onChange={(e) =>
              setNewUser({ ...newUser, workoutPlan: e.target.value })
            }
            value={newUser.workoutPlan}
            type="text"
            placeholder="Enter User's Workout Plan"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            onChange={(e) =>
              setNewUser({ ...newUser, trainer: e.target.value })
            }
            value={newUser.trainer}
            placeholder="Enter User's Trainer Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%] h-10 bg-[rgb(75,75,75)] text-white font-semibold rounded-lg transition-all hover:bg-[rgb(95,95,95)]"
          >
            {editMode ? "Edit User" : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
