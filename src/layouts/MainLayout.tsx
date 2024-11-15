import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <div className="flex w-[98vw] h-auto">
        <Sidebar />
        <div className=" w-[80%] h-auto">
          <Outlet />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default MainLayout;
