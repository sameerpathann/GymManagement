import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MembershipSection = ({ membershipData, handelmemberShipDelete }) => {
  return (
    <div className="p-4">
      <div className="hidden md:block">
        <table className="w-full border-none table-auto border-collapse">
          <thead>
            <tr>
              <th className="p-2">Plan Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Duration</th>
              <th className="p-2">Benefits</th>
              <th className="p-2">Edit</th>
              <th className="p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {membershipData?.Data?.map((membership) => (
              <tr
                key={membership.id}
                className="text-center border-b-2 border-gray-500 border-opacity-30 cursor-pointer hover:bg-[#e3e1e1]"
              >
                <td className="p-2">{membership.name}</td>
                <td className="p-2">{membership.price}</td>
                <td className="p-2">{membership.duration}</td>
                <td className="p-2">
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
                <td className="p-2">
                  <Link to={`/editMembership/${membership.id}`}>
                    <button className="bg-[rgb(59,130,246)] hover:bg-[rgb(94,139,211)] px-3 py-2 rounded-lg text-[1.2vw] text-white font-semibold">
                      <BiEdit />
                    </button>
                  </Link>
                </td>
                <td
                  className="p-2"
                  onClick={() => handelmemberShipDelete(membership.id)}
                >
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
        {membershipData?.Data?.map((membership) => (
          <div
            key={membership.id}
            className="border-2 border-gray-300 p-4 mb-4 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{membership.name}</h2>
              <div className="flex gap-4">
                <Link to={`/editMembership/${membership.id}`}>
                  <button className="bg-[rgb(59,130,246)] hover:bg-[rgb(94,139,211)] px-4 py-2 rounded-lg text-white font-semibold">
                    <BiEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handelmemberShipDelete(membership.id)}
                  className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg text-white font-semibold"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p>
                <strong>Price:</strong> {membership.price}
              </p>
              <p>
                <strong>Duration:</strong> {membership.duration}
              </p>
              <p>
                <strong>Benefits:</strong>
              </p>
              {membership.benefits && Array.isArray(membership.benefits) ? (
                membership.benefits.map((benefit, i) => (
                  <ul key={i} className="pl-4">
                    <li>{benefit}</li>
                  </ul>
                ))
              ) : (
                <span>No Benefits</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipSection;
