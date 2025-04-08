import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MembershipSection = ({
  membershipData,
  setMembershipData,
  handelmemberShipDelete,
}) => {
  return (
    <div>
      <table className="w-full border-none table-auto border-collapse">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Benifts</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {membershipData?.Data?.map((membership) => (
            <tr
              key={membership.id}
              className="text-center border-b-2 border-gray-500 border-opacity-30 cursor-pointer hover:bg-[#e3e1e1]"
            >
              <td>{membership.name}</td>
              <td>{membership.price}</td>
              <td>{membership.duration}</td>
              <td>
                {membership.benefits && Array.isArray(membership.benefits) ? (
                  membership.benefits.map((b, i) => (
                    <ul key={i}>
                      <li>{b}</li>
                    </ul>
                  ))
                ) : (
                  <span>No Benefits</span>
                )}
              </td>

              <td>
                <Link to={`/editMembership/${membership.id}`}>
                  {" "}
                  <button className="bg-[rgb(59,130,246)] hover:bg-[rgb(94,139,211)] px-2 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                    <BiEdit />
                  </button>
                </Link>
              </td>
              <td onClick={() => handelmemberShipDelete(membership.id)}>
                <button className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembershipSection;
