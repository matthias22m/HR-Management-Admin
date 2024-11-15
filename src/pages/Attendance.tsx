import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";

const employees = [
  {
    profile: "/src/assets/profile/p1.png",
    name: "Leasie Watson",
    id: "251435433",
    department: "Design",
    designation: "Team Lead - Design",
    checkInTime:'09:30 AM',
    type: "Office",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p2.png",
    name: "Darriene Robertson",
    id: "314665761",
    department: "Development",
    designation: "Web Designer",
    checkInTime:'09:30 AM',
    type: "Office",
    status: "Late",
  },
  {
    profile: "/src/assets/profile/p3.png",
    name: "Jacob Jones",
    id: "784624456",
    department: "Sales",
    designation: "Medical Assistant",
    checkInTime:'09:30 AM',
    type: "Remote",
    status: "Late",
  },
  {
    profile: "/src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    id: "217894438",
    department: "Design",
    designation: "Marketing Coordinator",
    checkInTime:'09:30 AM',
    type: "Office",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p5.png",
    name: "Leslie Alexander",
    id: "143466524",
    department: "HR",
    designation: "Data Analyst",
    checkInTime:'09:30 AM',
    type: "Office",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p6.png",
    name: "Roland Richards",
    id: "245742321",
    department: "BA",
    designation: "Python Developer",
    checkInTime:'09:30 AM',
    type: "Remote",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p7.png",
    name: "Jenny Wilson",
    id: "342432312",
    department: "Development",
    designation: "React Js Developer",
    checkInTime:'09:30 AM',
    type: "Remote",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p3.png",
    name: "Jacob Jones",
    id: "782624456",
    department: "Sales",
    designation: "Medical Assistant",
    checkInTime:'09:30 AM',
    type: "Remote",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    id: "217394438",
    department: "Design",
    designation: "Marketing Coordinator",
    checkInTime:'09:30 AM',
    type: "Office",
    status: "Late",
  },
  {
    profile: "/src/assets/profile/p5.png",
    name: "Leslie Alexander",
    id: "143476524",
    department: "HR",
    designation: "Data Analyst",
    checkInTime:'09:30 AM',
    type: "Office",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p6.png",
    name: "Roland Richards",
    id: "245732321",
    department: "BA",
    designation: "Python Developer",
    checkInTime:'09:30 AM',
    type: "Remote",
    status: "On Time",
  },
  {
    profile: "/src/assets/profile/p7.png",
    name: "Jenny Wilson",
    id: "342443312",
    department: "Development",
    designation: "React Js Developer",
    checkInTime:'09:30 AM',
    type: "Remote",
    status: "Late",
  },
];

const Attendance = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="Attendance"
        subTitle="All Employee Attendance"
      />
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
                Employee Name
              </th>
              <th className="text-start text-gray-500 font-normal">
                Designation
              </th>
              <th className="text-start text-gray-500 font-normal">Type</th>
              <th className="text-start text-gray-500 font-normal">
                Check In Time
              </th>
              <th className="text-start text-gray-500 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="h-12 border-b">
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

                <td>{emp.designation}</td>
                <td>{emp.type}</td>
                <td>
                    {emp.checkInTime}
                </td>
                <td>
                  {emp.status == "Late" ? (
                    <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      Late
                    </div>
                  ) : (
                    <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      On time
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

export default Attendance;
