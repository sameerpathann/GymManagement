import { FiUsers } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { IoBarbellSharp } from "react-icons/io5";
import trainersData from "./TrainersData";
import users from "./UserData";
import membershipDetails from "./MembershipData";
const totalitems = [
  {
    heading: "total Users",
    value: users.totalUser,
    icon: (prop) => <FiUsers {...prop} size={"100%"} color="rgb(59,130,246)" />,
  },
  {
    heading: "Total Revenue",
    value: `$${membershipDetails.totalRevenue}`,
    icon: (prop) => <BiDollar {...prop} size={"100%"} color="rgb(34,197,94)" />,
  },
  {
    heading: "Total Memberships",
    value: membershipDetails.totalMemberships,
    icon: (prop) => (
      <BsBoxSeam {...prop} size={"70%"} color="rgb(249,115,22)" />
    ),
  },
  {
    heading: "Total Trainers",
    value: trainersData.totalTrainers,
    icon: (prop) => (
      <IoBarbellSharp
        {...prop}
        className="rotate-45"
        color="#4B4B4B"
        size={"100%"}
      />
    ),
  },
];
export default totalitems;
