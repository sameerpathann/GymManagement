import { TbActivityHeartbeat } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const sideBarList = [
  {
    id: 1,
    icon: <TbActivityHeartbeat />,
    heading: "Dashboard",
  },
  {
    id: 2,
    icon: <FiUsers />,
    heading: "Users",
  },
  {
    id: 3,
    icon: <BsBoxSeam />,
    heading: "Memberships",
  },
  {
    id: 4,
    icon: <BiDollar />,
    heading: "Payments",
  },
  {
    id: 5,
    icon: <CiSettings />,
    heading: "Settings",
  },
];
export default sideBarList;
