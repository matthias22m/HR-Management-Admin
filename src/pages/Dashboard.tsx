import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import { PiScrollLight } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import DashCard from "../components/DashCard";
import DatePicker from "../components/DatePicker";
import ScheduleCard from "../components/ScheduleCard";
import AttendanceBar from "../components/AttendanceBar";
import Header from "../components/Header";

const employees = [
  {
    profile: "src/assets/profile/p1.png",
    name: "Leasie Watson",
    designation: "Team Lead - Design",
    type: "Office",
    checkInTime: "09:27 AM",
    status: "On Time",
  },
  {
    profile: "src/assets/profile/p2.png",
    name: "Darriene Robertson",
    designation: "Web Designer",
    type: "Office",
    checkInTime: "10:15 AM",
    status: "Late",
  },
  {
    profile: "src/assets/profile/p3.png",
    name: "Jacob Jones",
    designation: "Medical Assistant",
    type: "Remote",
    checkInTime: "10:24 AM",
    status: "Late",
  },
  {
    profile: "src/assets/profile/p4.png",
    name: "Kathryn Murphy",
    designation: "Marketing Coordinator",
    type: "Office",
    checkInTime: "09:10 AM",
    status: "On Time",
  },
  {
    profile: "src/assets/profile/p5.png",
    name: "Leslie Alexander",
    designation: "Data Analyst",
    type: "Office",
    checkInTime: "09:15 AM",
    status: "On Time",
  },
  {
    profile: "src/assets/profile/p6.png",
    name: "Roland Richards",
    designation: "Python Developer",
    type: "Remote",
    checkInTime: "09:29 AM",
    status: "On Time",
  },
  {
    profile: "src/assets/profile/p7.png",
    name: "Jenny Wilson",
    designation: "React Js Developer",
    type: "Remote",
    checkInTime: "11:30 AM",
    status: "On Time",
  },
];

const Dashboard = () => {
  return (
    <>
      <Header title={"Hello Matthias 👋"} subTitle={"Good Morning"} />

      <section className="w-[100%] h-auto mb-6 flex gap-10">
        <div className="w-[60%] h-auto">
          <div className="w-[100%] h-96 grid grid-cols-2 grid-rows-2 gap-5">
            <DashCard
              cardTitle="Total Employee"
              totalNumber={560}
              cardIcon={() => {
                return <HiOutlineUserGroup color="#7152F3" size={20} />;
              }}
            />
            <DashCard
              cardTitle="Total Applicant"
              totalNumber={1050}
              cardIcon={() => {
                return <MdOutlineWorkOutline color="#7152F3" size={20} />;
              }}
            />
            <DashCard
              cardTitle="Total Attendance"
              totalNumber={470}
              cardIcon={() => {
                return <LuCalendarCheck color="#7152F3" size={20} />;
              }}
            />
            <DashCard
              cardTitle="Total Projects"
              totalNumber={250}
              cardIcon={() => {
                return <PiScrollLight color="#7152F3" size={20} />;
              }}
            />
          </div>
          <div className="w-[100%] h-[35rem] mt-4 border rounded-lg">
            <div className="h-16 pl-[5%] w-[90%] flex items-center justify-between">
              <h1 className="text-lg font-bold">Attendance</h1>
              <div className="border text-sm h-8 w-32 flex justify-center items-center rounded-lg">
                <select className="outline-none" name="day" id="day">
                  <option value="">Today</option>
                  <option value="">Monday</option>
                  <option value="">Tuesday</option>
                  <option value="">Wednesday</option>
                  <option value="">Friday</option>
                  <option value="">Saturday</option>
                  <option value="">Sunday</option>
                </select>
              </div>
            </div>
            <AttendanceBar />
          </div>
        </div>
        <div className="border rounded-lg w-[35%] place-items-center">
          <div className="text-lg h-16 w-[80%] font-bold flex items-center justify-between">
            <h1>My schedule</h1>
            <div className="bg-[#7152F31A] h-8 w-8 flex justify-center items-center rounded-lg">
              <FaRegCalendarAlt color="#7152F3" />
            </div>
          </div>
          <DatePicker />
          <div className="w-[80%]">
            <div className="text-sm h-16 flex items-center justify-between">
              <h1>Wednesday, 06 July 2023</h1>
              <PiDotsThreeOutlineVerticalLight color="#7152F3" />
            </div>
            <ScheduleCard
              title="UI/UX Designer"
              subTitle="Practical Task Review"
              time="09:30"
            />
            <ScheduleCard
              title="UI/UX Designer"
              subTitle="Practical Task Review"
              time="09:30"
            />
            <ScheduleCard
              title="UI/UX Designer"
              subTitle="Practical Task Review"
              time="09:30"
            />
          </div>
          <div className="w-[80%]">
            <div className="text-sm h-16 flex items-center justify-between">
              <h1>Wednesday, 06 July 2023</h1>
              <PiDotsThreeOutlineVerticalLight color="#7152F3" />
            </div>
            <ScheduleCard
              title="UI/UX Designer"
              subTitle="Practical Task Review"
              time="09:30"
            />
            <ScheduleCard
              title="UI/UX Designer"
              subTitle="Practical Task Review"
              time="09:30"
            />
            <ScheduleCard
              title="UI/UX Designer"
              subTitle="Practical Task Review"
              time="09:30"
            />
          </div>
        </div>
      </section>
      <section className="w-[98%] h-auto mb-8 place-items-center border rounded-lg">
        <div className="h-16 w-[90%]  flex items-center justify-between">
          <h1 className="text-lg font-bold">Attendance Overview</h1>
          <div className="bg-[#7152F31A] text-sm h-8 w-20 flex justify-center items-center rounded-lg">
            View All
          </div>
        </div>
        <table className="w-[90%]">
          <thead>
            <tr className="h-12">
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
            {employees.map((emp, index) => (
              <tr key={index} className="h-12 border-b">
                <td>
                  <img
                    src={emp.profile}
                    className="w-8 mr-2 aspect-square inline rounded-[50%]"
                    alt=""
                  />
                  {emp.name}
                </td>
                <td>{emp.designation}</td>
                <td>{emp.type}</td>
                <td>{emp.checkInTime}</td>
                <td>
                  <div className="bg-[#7152F31A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
                    {emp.status}
                  </div>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Dashboard;
