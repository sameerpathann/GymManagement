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
      console.log("chala");
      if (user) {
        console.log("chala2");
        setNewUser(user);
      }
    }
  }, [userData, setNewUser, id]);

  return (
    <div className="w-full bg-zinc-300 h-screen flex items-center justify-center pt-5">
      <div className="w-[30%] bg-white pt-6 br rounded-lg overflow-hidden h-[75%]">
        <h1
          className="text-[1.5vw] font-semibold text-center
    "
        >
          Please Enter New User Details
        </h1>
        <form
          onSubmit={(e) => handelAddUser(e)}
          className="items-center w-full flex flex-col gap-4 pt-5 h-full"
        >
          <input
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            type="text"
            placeholder="Enter User's Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-2 focus:ring-blue-400 outline-none focus:border-none"
          />{" "}
          <input
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            value={newUser.email}
            type="email"
            placeholder="Enter User's Email"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <select
            onChange={(e) =>
              setNewUser({ ...newUser, membershipType: e.target.value })
            }
            value={newUser.membershipType}
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select User plan</option>
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
            placeholder="Enter User's WorkOutPlan"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            onChange={(e) =>
              setNewUser({ ...newUser, trainer: e.target.value })
            }
            value={newUser.trainer}
            placeholder="Enter User's Trainer Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-[35%] rounded-lg h-[10%] bg-[rgb(75,75,75)] text-white font-semibold"
          >
            {editMode ? "Edit User" : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
