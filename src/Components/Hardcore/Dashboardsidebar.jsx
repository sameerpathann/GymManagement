import { TbActivityHeartbeat } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const sideBarList = [
  {
    id: 1,
    icon: (id) => <TbActivityHeartbeat className={`w-[100%] h-[100%] ${id}`} />,
    heading: "Dashboard",
  },
  {
    id: 2,
    icon: (id) => <FiUsers className={`w-[100%] h-[100%] ${id}`} />,
    heading: "Users",
  },
  {
    id: 3,
    icon: (id) => <BsBoxSeam className={`w-[80%] h-[80%] ${id}`} />,
    heading: "Memberships",
  },
  {
    id: 4,
    icon: (id) => <BiDollar className={`w-[100%] h-[100%] ${id}`} />,
    heading: "Payments",
  },
  {
    id: 5,
    icon: (id) => <CiSettings className={`w-[100%] h-[100%] ${id}`} />,
    heading: "Settings",
  },
];
export default sideBarList;
