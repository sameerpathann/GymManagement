import React from "react";

const MembershipForm = ({
  newMembership,
  setNewMembership,
  handelAddMembership,
}) => {
  return (
    <div className="w-full bg-zinc-300 h-screen flex items-center justify-center pt-5">
      <div className="w-[30%] bg-white pt-6 br rounded-lg overflow-hidden h-[75%]">
        <h1
          className="text-[1.5vw] font-semibold text-center
"
        >
          Please Enter New Membership Details
        </h1>
        <form
          onSubmit={(e) => handelAddMembership(e)}
          className="items-center w-full flex flex-col gap-4 pt-5 h-full"
        >
          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, name: e.target.value })
            }
            value={newMembership.name}
            type="text"
            placeholder="Enter Membership Name"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-2 focus:ring-blue-400 outline-none focus:border-none"
          />{" "}
          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, price: e.target.value })
            }
            value={newMembership.price}
            type="text"
            placeholder="Enter Membership Price"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, duration: e.target.value })
            }
            value={newMembership.duration}
            type="text"
            placeholder="Enter Membership Duration"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black  focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            onChange={(e) =>
              setNewMembership({ ...newMembership, benefits: e.target.value })
            }
            value={newMembership.benefits}
            type="text"
            placeholder="Enter Membership Benifts"
            className="w-[90%] px-3 py-2 rounded-lg ring-2 ring-black focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-[35%] rounded-lg h-[10%] bg-[rgb(75,75,75)] text-white font-semibold"
          >
            Add Membership
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
