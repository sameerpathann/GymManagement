import { FiUsers } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { IoBarbellSharp } from "react-icons/io5";
import trainersData from "./TrainersData";
const totalitems = [
  {
    heading: "total Users",
    value: trainersData.totalTrainers,
    icon: (prop) => <FiUsers {...prop} size={"100%"} color="rgb(59,130,246)" />,
  },
  {
    heading: "Total Revenue",
    value: "$12,500",
    icon: (prop) => <BiDollar {...prop} size={"100%"} color="rgb(34,197,94)" />,
  },
  {
    heading: "Total Memberships",
    value: 220,
    icon: (prop) => (
      <BsBoxSeam {...prop} size={"70%"} color="rgb(249,115,22)" />
    ),
  },
  {
    heading: "Total Trainers",
    value: 8,
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
