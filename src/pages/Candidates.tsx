import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";

const employees = [
  {
    profile: "src/assets/profile/p1.png",
    name: "Leasie Watson",
    id: "251435433",
    phone: "(629) 555- 0129",
    email: "leasie.w@demo.com",
    appliedDate: "July 14, 2023",
    department: "Design",
    designation: "Team Lead - Design",
    type: "Office",
    status: "Selected",
  },
  {
    profile: "src/assets/profile/p2.png",
    name: "Darriene Robertson",
    id: "314665761",
    phone: "(629) 555- 0129",
    email: "darriene.r@demo.com",
    appliedDate: "July 14, 2023",
    department: "Development",
    designation: "Web Designer",
    type: "Office",
    status: "In Progress",
  },
  {
    profile: "src/assets/profile/p3.png",
    name: "Jacob Jones",
    id: "784624456",
    phone: "(629) 555- 0129",
    email: "jacob.j@demo.com",
    appliedDate: "July 14, 2023",
    department: "Sales",
    designation: "Medical Assistant",
    type: "Remote",
    status: "In Progress",
  },
  {
    profile: "src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    id: "217894438",
    phone: "(629) 555- 0129",
    email: "kathryn.m@demo.com",
    appliedDate: "July 14, 2023",
    department: "Design",
    designation: "Marketing Coordinator",
    type: "Office",
    status: "In Progress",
  },
  {
    profile: "src/assets/profile/p5.png",
    name: "Leslie Alexander",
    id: "143466524",
    phone: "(629) 555- 0129",
    email: "leslie.a@demo.com",
    appliedDate: "July 14, 2023",
    department: "HR",
    designation: "Data Analyst",
    type: "Office",
    status: "Rejected",
  },
  {
    profile: "src/assets/profile/p6.png",
    name: "Roland Richards",
    id: "245742321",
    phone: "(629) 555- 0129",
    email: "roland.r@demo.com",
    appliedDate: "July 14, 2023",
    department: "BA",
    designation: "Python Developer",
    type: "Remote",
    status: "Rejected",
  },
  {
    profile: "src/assets/profile/p7.png",
    name: "Jenny Wilson",
    id: "342432312",
    phone: "(629) 555- 0129",
    email: "jenny.w@demo.com",
    appliedDate: "July 14, 2023",
    department: "Development",
    designation: "React Js Developer",
    type: "Remote",
    status: "In Progress",
  },
  {
    profile: "src/assets/profile/p3.png",
    name: "Jacob Jones",
    id: "782624456",
    phone: "(629) 555- 0129",
    email: "jacob.j@demo.com",
    appliedDate: "July 14, 2023",
    department: "Sales",
    designation: "Medical Assistant",
    type: "Remote",
    status: "Selected",
  },
  {
    profile: "src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    id: "217394438",
    phone: "(629) 555- 0129",
    email: "kathryn.m@demo.com",
    appliedDate: "July 14, 2023",
    department: "Design",
    designation: "Marketing Coordinator",
    type: "Office",
    status: "Selected",
  },
  {
    profile: "src/assets/profile/p5.png",
    name: "Leslie Alexander",
    id: "143476524",
    phone: "(629) 555- 0129",
    email: "leslie.a@demo.com",
    appliedDate: "July 14, 2023",
    department: "HR",
    designation: "Data Analyst",
    type: "Office",
    status: "In Progress",
  },
  {
    profile: "src/assets/profile/p6.png",
    name: "Roland Richards",
    id: "245732321",
    phone: "(629) 555- 0129",
    email: "roland.r@demo.com",
    appliedDate: "July 14, 2023",
    department: "BA",
    designation: "Python Developer",
    type: "Remote",
    status: "Rejected",
  },
  {
    profile: "src/assets/profile/p7.png",
    name: "Jenny Wilson",
    id: "342443312",
    phone: "(629) 555- 0129",
    email: "jenny.w@demo.com",
    appliedDate: "July 14, 2023",
    department: "Development",
    designation: "React Js Developer",
    type: "Remote",
    status: "Selected",
  },
];

const Candidates = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="All Employees" subTitle="All Employees Information" />
      <section className="pl-8 pt-4 mb-10 pr-8 w-[98%] border rounded-lg">
        <div className="h-20 w-[100%] flex items-center justify-between">
          <div className="w-80 h-[60%] border rounded-md flex items-center">
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
        </div>
        <table className="w-[100%]">
          <thead>
            <tr className="h-12 border-b">
              <th className="text-start text-gray-500 font-normal">
                <input type="checkbox" />
              </th>
              <th className="text-start text-gray-500 font-normal">
                Employee Name
              </th>
              <th className="text-start text-gray-500 font-normal">
                Applied For
              </th>
              <th className="text-start text-gray-500 font-normal">
                Applied Date
              </th>
              <th className="text-start text-gray-500 font-normal">
                Email Address
              </th>
              <th className="text-start text-gray-500 font-normal">
                Mobile Number
              </th>
              <th className="text-start text-gray-500 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="h-12 border-b">
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td
                  className="cursor-pointer"
                  onClick={() => navigate("/employee/profile")}
                >
                  <img
                    src={emp.profile}
                    className="w-8 mr-2 aspect-square inline rounded-[50%]"
                    alt=""
                  />
                  {emp.name}
                </td>
                <td>{emp.department}</td>
                <td>{emp.appliedDate}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>
                  {emp.status === "Rejected" ? (
                    <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      Rejected
                    </div>
                  ) : emp.status === "In Progress" ? (
                    <div className="bg-[#EFBE121A] text-[#EFBE12] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      In Progress
                    </div>
                  ) : (
                    <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      Selected
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between h-16 items-center">
          <div className="text-gray-400">
            Showing
            <select
              className="border outline-none text-black ml-4 w-14 h-8"
              name="pageNumber"
              id="pageNumber"
            >
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">30</option>
              <option value="10">40</option>
              <option value="10">50</option>
              <option value="10">60</option>
            </select>
          </div>
          <div className="text-sm text-gray-400">
            Showing 1 to 10 out of 6 records
          </div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </section>
    </>
  );
};

export default Candidates;
