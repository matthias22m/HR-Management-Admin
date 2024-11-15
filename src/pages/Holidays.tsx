import { GoDotFill } from "react-icons/go";
import Header from "../components/Header";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import AddHolidayModal from "../components/AddHolidayModal";

const holidays = [
  {
    date: "January 01, 2023",
    day: "Tuesday",
    passed: true,
    holidayName: "New Year",
  },
  {
    date: "January 07, 2023",
    day: "Saturday",
    passed: true,
    holidayName: "International Programmers' Day",
  },
  {
    date: "February 04, 2023",
    day: "Saturday",
    passed: true,
    holidayName: "World Cancer Day",
  },
  {
    date: "April 01, 2023",
    day: "Saturday",
    passed: true,
    holidayName: "April Fool Day",
  },
  {
    date: "May 07, 2023",
    day: "Monday",
    passed: true,
    holidayName: "International Programmers' Day",
  },
  {
    date: "May 22, 2023",
    day: "Tuesday",
    passed: true,
    holidayName: "International Day for Biological Diversity",
  },
  {
    date: "June 05, 2023",
    day: "Monday",
    passed: true,
    holidayName: "International Day for Biological Diversity",
  },
  {
    date: "August 07, 2023",
    day: "Monday",
    passed: false,
    holidayName: "International Friendship Day",
  },
  {
    date: "September 15, 2023",
    day: "Friday",
    passed: false,
    holidayName: "International Day of Democracy",
  },
  {
    date: "November 14, 2023",
    day: "Tuesday",
    passed: false,
    holidayName: "World Diabetes Day",
  },
  {
    date: "December 25, 2023",
    day: "Monday",
    passed: false,
    holidayName: "Merry Christmas",
  },
];

const Holidays = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const onClose = () => {
    setFilterOpen(false);
  };
  return (
    <>
      <AddHolidayModal onClose={onClose} isOpen={filterOpen} />

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
          <div className="flex gap-3">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex justify-center items-center gap-1 w-48 h-10 rounded-lg text-white bg-[#7152F3]"
            >
              <IoAddCircleOutline size={20} />
              Add New Holiday
            </button>
          </div>
        </div>
        <table className="w-[100%]">
          <thead>
            <tr className="h-12 border-b">
              <th className="text-start text-gray-500 font-normal">Date</th>
              <th className="text-start text-gray-500 font-normal">Day</th>
              <th className="text-start text-gray-500 font-normal">
                Holiday Name
              </th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((hday, index) => (
              <tr key={index} className=" h-12 border-b ">
                <td
                  className={
                    "relative before:block before:absolute before:left-[-4px] before:bottom-0  before:h-[80%] before:w-[2px] " +
                    (hday.passed
                      ? "before:bg-[#A2A1A833]"
                      : "before:bg-[#7152F3]")
                  }
                >
                  {hday.date}
                </td>
                <td>{hday.day}</td>
                <td>{hday.holidayName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 h-16 items-center">
          <div className="flex items-center gap-2">
            <GoDotFill color="#7152F3" />
            Upcoming
          </div>
          <div className="flex items-center gap-2">
            <GoDotFill color="#A2A1A833" />
            Post Holidays
          </div>
        </div>
      </section>
    </>
  );
};

export default Holidays;
