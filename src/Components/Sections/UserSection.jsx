import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const UserSection = ({ userData, handelUserDelete }) => {
  return (
    <>
      <div className="w-full h-screen">
        <table className="w-full h-full border-none table-auto border-collapse">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Membership</th>
              <th>WorkoutPlan</th>
              <th>Trainer</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.Data?.map((user) => (
              <tr
                key={user.id}
                className="text-center border-b-2 border-gray-500 border-opacity-30 cursor-pointer hover:bg-[#e3e1e1]"
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.membershipType}</td>
                <td>{user.workoutPlan}</td>
                <td>{user.trainer}</td>
                <td>
                  <Link to={`/EditUser/${user.id}`}>
                    {" "}
                    <button className="bg-[rgb(59,130,246)] hover:bg-[rgb(94,139,211)] px-2 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                      <BiEdit />
                    </button>
                  </Link>
                </td>
                <td onClick={() => handelUserDelete(user.id)}>
                  <button className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserSection;
