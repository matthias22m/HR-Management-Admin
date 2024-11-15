import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { PiExportBold } from "react-icons/pi";

const employees = [
  {
    profile: "../../src/assets/profile/p1.png",
    name: "Leasie Watson",
    id: "251435433",
    department: "Design",
    designation: "Team Lead - Design",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$3500",
    ctc: "$45000",
    deduction: "-",
    type: "Office",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p2.png",
    name: "Darriene Robertson",
    id: "314665761",
    department: "Development",
    designation: "Web Designer",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$6400",
    ctc: "$78000",
    deduction: "$100",
    type: "Office",
    status: "Pending",
  },
  {
    profile: "../../src/assets/profile/p3.png",
    name: "Jacob Jones",
    id: "784624456",
    department: "Sales",
    designation: "Medical Assistant",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$5000",
    ctc: "$60000",
    deduction: "$250",
    type: "Remote",
    status: "Pending",
  },
  {
    profile: "../../src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    id: "217894438",
    department: "Design",
    designation: "Marketing Coordinator",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$2800",
    ctc: "$34000",
    deduction: "-",
    type: "Office",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p5.png",
    name: "Leslie Alexander",
    id: "143466524",
    department: "HR",
    designation: "Data Analyst",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$3400",
    ctc: "$40000",
    deduction: "-",
    type: "Office",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p6.png",
    name: "Roland Richards",
    id: "245742321",
    department: "BA",
    designation: "Python Developer",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$3500",
    ctc: "$45000",
    deduction: "-",
    type: "Remote",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p7.png",
    name: "Jenny Wilson",
    id: "342432312",
    department: "Development",
    designation: "React Js Developer",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$4000",
    ctc: "$55000",
    deduction: "$50",
    type: "Remote",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p3.png",
    name: "Jacob Jones",
    id: "782624456",
    department: "Sales",
    designation: "Medical Assistant",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$5000",
    ctc: "$60000",
    deduction: "$150",
    type: "Remote",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    id: "217394438",
    department: "Design",
    designation: "Marketing Coordinator",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$2200",
    ctc: "$25000",
    deduction: "-",
    type: "Office",
    status: "Pending",
  },
  {
    profile: "../../src/assets/profile/p5.png",
    name: "Leslie Alexander",
    id: "143476524",
    department: "HR",
    designation: "Data Analyst",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$2700",
    ctc: "$30000",
    deduction: "-",
    type: "Office",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p6.png",
    name: "Roland Richards",
    id: "245732321",
    department: "BA",
    designation: "Python Developer",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$6400",
    ctc: "$78000",
    deduction: "-",
    type: "Remote",
    status: "Completed",
  },
  {
    profile: "../../src/assets/profile/p7.png",
    name: "Jenny Wilson",
    id: "342443312",
    department: "Development",
    designation: "React Js Developer",
    checkInTime: "09:30 AM",
    salaryPerMonth: "$3500",
    ctc: "$45000",
    deduction: "$100",
    type: "Remote",
    status: "Pending",
  },
];

const Payroll = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="Design Department"
        subTitle="All Departments > Design Department"
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
          <div className="flex gap-3">
            <button
              // onClick={() => navigate("")}
              className="flex justify-center items-center gap-1 w-28 h-10 rounded-lg text-white bg-[#7152F3]"
            >
              <PiExportBold size={20} />
              Export
            </button>
          </div>
        </div>
        <table className="w-[100%]">
          <thead>
            <tr className="h-12 border-b">
              <th className="text-start text-gray-500 font-normal">
                Employee Name
              </th>
              <th className="text-start text-gray-500 font-normal">CTC</th>
              <th className="text-start text-gray-500 font-normal">
                Salary Per Month
              </th>
              <th className="text-start text-gray-500 font-normal">
                Deduction
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
                <td>{emp.ctc}</td>
                <td>{emp.salaryPerMonth}</td>
                <td>
                  {emp.deduction}
                </td>
                <td>
                  {emp.status == "Pending" ? (
                    <div className="bg-[#EFBE121A] text-[#EFBE12] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      Pending
                    </div>
                  ) : (
                    <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                      Completed
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

export default Payroll;
