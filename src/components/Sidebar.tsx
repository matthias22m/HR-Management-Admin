import SidebarList from "./SidebarList";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiP2pLine } from "react-icons/ri";
import { LuCalendarCheck } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { PiNotepad } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import logoImg from "../assets/hrms-logo.png"

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="realative h-[95vh] w-[18rem] m-[1%]">
      <div className="fixed top-[2%] h-[95vh] flex-none w-[17rem] p-5 bg-[#a2a1a816]">
        <div className="flex justify-center items-center gap-5 w-100">
          <img
            className="h-10 aspect-square"
            src={logoImg}
            alt=""
          />
          <h1 className="text-2xl font-sans font-bold">HRMS</h1>
        </div>

        <SidebarList
          onClick={() => navigate("/")}
          text="Dashboard"
          icon={() => <TbLayoutDashboard size={18} />}
          isActive={location.pathname === "/"}
        />
        <SidebarList
          onClick={() => navigate("/employees")}
          text="All Employees"
          icon={() => <HiOutlineUserGroup size={18} />}
          isActive={location.pathname.includes("/employee")}
        />
        <SidebarList
          onClick={() => navigate("/departments")}
          text="All Departments"
          icon={() => <RiP2pLine size={18} />}
          isActive={location.pathname === "/departments"}
        />
        <SidebarList
          onClick={() => navigate("/attendance")}
          text="Attendance"
          icon={() => <LuCalendarCheck size={18} />}
          isActive={location.pathname === "/attendance"}
        />
        <SidebarList
          onClick={() => navigate("/payroll")}
          text="Payroll"
          icon={() => <AiOutlineDollar size={18} />}
          isActive={location.pathname === "/payroll"}
        />
        <SidebarList
          onClick={() => navigate("/jobs")}
          text="Jobs"
          icon={() => <MdOutlineWorkOutline size={18} />}
          isActive={location.pathname === "/jobs"}
        />
        <SidebarList
          onClick={() => navigate("/candidates")}
          text="Candidates"
          icon={() => <BsPeople size={18} />}
          isActive={location.pathname === "/candidates"}
        />
        <SidebarList
          onClick={() => navigate("/employees")}
          text="Leaves"
          icon={() => <PiNotepad size={18} />}
          isActive={location.pathname === "/leaves"}
        />
        <SidebarList
          onClick={() => navigate("/holidays")}
          text="Holidays"
          icon={() => <LuCalendarDays size={18} />}
          isActive={location.pathname === "/holidays"}
        />
        <SidebarList
          onClick={() => navigate("/settings")}
          text="Settings"
          icon={() => <IoSettingsOutline size={18} />}
          isActive={location.pathname === "/settings"}
        />
      </div>
    </section>
  );
};

export default Sidebar;
