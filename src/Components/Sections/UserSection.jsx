import React from "react";

const UserSection = ({ userData }) => {
  console.log(userData);
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
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => (
              <tr
                key={user.id}
                className="text-center border-b-2 border-gray-500 border-opacity-30 cursor-pointer hover:bg-[#e3e1e1]"
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.membershipType}</td>
                <td>{user.workoutPlan}</td>
                <td>{user.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserSection;
