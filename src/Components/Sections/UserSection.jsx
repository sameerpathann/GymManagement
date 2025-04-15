import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const UserSection = ({ userData, handelUserDelete }) => {
  return (
    <>
      <div className="w-full h-auto p-4">
        <div className="hidden md:block">
          <table className="w-full h-auto border-none table-auto border-collapse">
            <thead>
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Membership</th>
                <th className="p-2">Workout Plan</th>
                <th className="p-2">Trainer</th>
                <th className="p-2">Edit</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.Data?.map((user) => (
                <tr
                  key={user.id}
                  className="text-center border-b-2 border-gray-500 border-opacity-30 cursor-pointer hover:bg-[#e3e1e1]"
                >
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.membershipType}</td>
                  <td className="p-2">{user.workoutPlan}</td>
                  <td className="p-2">{user.trainer}</td>
                  <td className="p-2">
                    <Link to={`/EditUser/${user.id}`}>
                      <button className="bg-[rgb(59,130,246)] hover:bg-[rgb(94,139,211)] px-3 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                        <BiEdit />
                      </button>
                    </Link>
                  </td>
                  <td className="p-2" onClick={() => handelUserDelete(user.id)}>
                    <button className="bg-red-500 hover:bg-red-400 px-3 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          {userData.Data?.map((user) => (
            <div
              key={user.id}
              className="border-2 border-gray-300 p-4 mb-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <div className="flex gap-4">
                  <Link to={`/EditUser/${user.id}`}>
                    <button className="bg-[rgb(59,130,246)] hover:bg-[rgb(94,139,211)] px-4 py-2 rounded-lg text-white font-semibold">
                      <BiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handelUserDelete(user.id)}
                    className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg text-white font-semibold"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Membership:</strong> {user.membershipType}
                </p>
                <p>
                  <strong>Workout Plan:</strong> {user.workoutPlan}
                </p>
                <p>
                  <strong>Trainer:</strong> {user.trainer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSection;
