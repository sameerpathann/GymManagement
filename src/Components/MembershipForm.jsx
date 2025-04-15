import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MembershipForm = ({
  newMembership,
  setNewMembership,
  handelAddMembership,
  isEditMode = false,
  membershipData = [],
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const membership = membershipData.Data?.find(
        (membership) => membership.id === parseInt(id)
      );
      if (membership) {
        setNewMembership(membership);
      }
    }
  }, [membershipData, setNewMembership, id]);

  return (
    <div className="w-full min-h-screen bg-zinc-300 flex items-center justify-center p-4">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white mt-8 pt-6 rounded-lg overflow-hidden">
        <h1 className="text-xl md:text-[1.5vw] font-semibold text-center px-4">
          Please Enter New Membership Details
        </h1>

        <form
          onSubmit={(e) => handelAddMembership(e)}
          className="w-full flex flex-col items-center gap-4 py-6"
        >
          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, name: e.target.value })
            }
            value={newMembership.name}
            type="text"
            placeholder="Enter Membership Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, price: e.target.value })
            }
            value={newMembership.price}
            type="text"
            placeholder="Enter Membership Price"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, duration: e.target.value })
            }
            value={newMembership.duration}
            type="text"
            placeholder="Enter Membership Duration"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, benefits: e.target.value })
            }
            value={newMembership.benefits}
            type="text"
            placeholder="Enter Membership Benefits"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%] h-10 bg-[rgb(75,75,75)] text-white font-semibold rounded-lg hover:bg-[rgb(90,90,90)] transition-all"
          >
            {isEditMode ? "Edit Membership" : "Add Membership"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
