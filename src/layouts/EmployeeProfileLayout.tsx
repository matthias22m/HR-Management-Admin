import { FaRegFileLines } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

const EmployeeProfile = () => {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/employee/profile") {
    return <Navigate to="/employee/profile/personalInformation" replace />;
  }
  return (
    <>
      <div className="w-[74%]">
        <div className="flex gap-16  h-10  mb-4 border-b-2">
          <Link
            className={
              location.pathname === "/employee/profile/personalInformation"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 mb-[-1px] border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="personalInformation"
          >
            <IoPerson />
            Personal Information
          </Link>
          <Link
            className={
              location.pathname === "/employee/profile/professionalInformation"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 mb-[-1px] border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="professionalInformation"
          >
            <MdOutlineWorkOutline />
            Professional Information
          </Link>
          <Link
            className={
              location.pathname === "/employee/profile/document"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 mb-[-1px] border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="document"
          >
            <FaRegFileLines />
            Documents
          </Link>
          <Link
            className={
              location.pathname === "/employee/profile/accountAccess"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 mb-[-1px] border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="accountAccess"
          >
            <TbLock />
            Account Access
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default EmployeeProfile;
