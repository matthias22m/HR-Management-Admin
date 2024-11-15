import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import profileImage from "../assets/profile/p7.png";
import { FaRegEdit } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";
import { LuScrollText } from "react-icons/lu";
import { PiNotepad } from "react-icons/pi";

const EmployeeGeneralProfileLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/employee") {
    return <Navigate to="/employee/profile/personalInformation" replace />;
  }
  return (
    <>
      <Header
        title="Brooklyn Simmons"
        subTitle="All Employee > Brooklyn Simmons"
      />

      <section className="w-[98%] pl-4 h-auto mb-8 border rounded-lg">
        <div className="flex justify-between items-baseline w-[98%] h-28 pt-4 border-b-2">
          <div className="flex gap-3 h-16">
            <img className="rounded-lg" src={profileImage} alt="" />
            <div>
              <h1 className="text-lg font-semibold">Brooklyn Simmons</h1>
              <div className="flex h-6 items-center gap-1 text-xs">
                <MdOutlineWorkOutline size={15} /> Project Manager
              </div>
              <div className="flex items-center gap-1 text-xs">
                <CiMail size={15} /> brooklyn.s@example.com
              </div>
            </div>
          </div>
          <button className="flex w-36 h-10 rounded-lg place-content-center place-items-center bg-[#7152F3] text-white">
            <FaRegEdit className="mr-2" />
            Edit Profile
          </button>
        </div>
        <div className="flex gap-10 mt-6">
          <div className="h-48 w-56 flex-col border rounded-xl">
            <Link
              to={"profile"}
              className={
                location.pathname.includes("/employee/profile")
                  ? "h-[25%] pl-6 flex justify-start items-center gap-2 bg-[#7152F3] text-white rounded-lg"
                  : "h-[25%] pl-6 flex justify-start items-center gap-2 "
              }
            >
              <IoPerson size={20} />
              Profile
            </Link>
            <Link
              to={"attendance"}
              className={
                location.pathname === "/employee/attendance"
                  ? "h-[25%] pl-6 flex justify-start items-center gap-2 bg-[#7152F3] text-white rounded-lg"
                  : "h-[25%] pl-6 flex justify-start items-center gap-2 "
              }
            >
              <LuCalendarCheck size={20} />
              Attendance
            </Link>
            <Link
              to={"projects"}
              className={
                location.pathname === "/employee/projects"
                  ? "h-[25%] pl-6 flex justify-start items-center gap-2 bg-[#7152F3] text-white rounded-lg"
                  : "h-[25%] pl-6 flex justify-start items-center gap-2 "
              }
            >
              <LuScrollText size={20} />
              Projects
            </Link>
            <Link
              to={"leave"}
              className={
                location.pathname === "/employee/leave"
                  ? "h-[25%] pl-6 flex justify-start items-center gap-2 bg-[#7152F3] text-white rounded-lg"
                  : "h-[25%] pl-6 flex justify-start items-center gap-2 "
              }
            >
              <PiNotepad size={20} />
              Leave
            </Link>
          </div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default EmployeeGeneralProfileLayout;
