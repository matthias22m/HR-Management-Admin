import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import DepartmentCard from "../components/DepartmentCard";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate()

  const handleNavigate = (url:string)=>{
    navigate(url)
  }
  return (
    <>
      <Header title="All Departments" subTitle="All Departments Information" />
      <section className="pl-8 pt-4 mb-10 pr-8 w-[98%] border rounded-lg">
        <div className="w-80 h-10 border mb-4 rounded-md flex items-center">
          <label htmlFor="search-input">
            <CiSearch size={25} />
          </label>
          <input
            className="outline-0 pl-2 pr-2 w-[100%]"
            id="search-input"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <DepartmentCard key={1} onClick = {async () => handleNavigate("design")} title="Design" membersNumber={20} />
          <DepartmentCard key={2} onClick = {async () => handleNavigate("sales")} title="Sales" membersNumber={14} />
          <DepartmentCard key={3} onClick = {async () => handleNavigate("projectManager")} title="Project Manager" membersNumber={18} />
          <DepartmentCard key={4} onClick = {async () => handleNavigate("marketing")} title="Marketing" membersNumber={10} />
        </div>
      </section>
    </>
  );
};

export default Departments;
