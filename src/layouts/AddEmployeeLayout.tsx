import {
  Link,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "../components/Header";
import { IoPerson } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { TbLock } from "react-icons/tb";

const AddEmployeeLayout = () => {
  const location = useLocation();
  console.log(location.pathname)
  if (location.pathname === "/employees/add") {
    return <Navigate to="/employees/add/personalInformation" replace />;
  }
  return (
    <>
      <Header
        title="All Employees"
        subTitle="All Employee > Add New Employee"
      />
      <section className="w-[98%] pl-4 h-auto mb-8 border rounded-lg">
        <div className="flex gap-16 h-10 w-[98%] mb-4 border-b-2">
          <Link
            className={
              location.pathname === "/employees/add/personalInformation"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="personalInformation"
          >
            <IoPerson />
            Personal Information
          </Link>
          <Link
            className={
              location.pathname === "/employees/add/professionalInformation"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="professionalInformation"
          >
            <MdOutlineWorkOutline />
            Professional Information
          </Link>
          <Link
            className={
              location.pathname === "/employees/add/document"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="document"
          >
            <FaRegFileLines />
            Documents
          </Link>
          <Link
            className={
              location.pathname === "/employees/add/accountAccess"
                ? "flex items-center gap-2 text-[#7152F3] border-b-2 border-[#7152F3]"
                : "flex items-center gap-2"
            }
            to="accountAccess"
          >
            <TbLock />
            Account Access
          </Link>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default AddEmployeeLayout;
