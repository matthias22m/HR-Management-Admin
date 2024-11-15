import { useNavigate } from "react-router-dom";

const ProfessionalInformationForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[98%]">
      <div className="w-[100%] h-96 mt-6 grid grid-rows-5 grid-cols-6 gap-3 rounded-md">
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="employeeId"
          placeholder="Employee ID"
          type="text"
        />
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="username"
          placeholder="Username"
          type="text"
        />
        <select
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          name="martialStatus"
          id="martialStatus"
        >
          <option className="text-gray-300" value="">
            Select Employee Type
          </option>
          <option value="married">Office</option>
          <option value="single">Remote</option>
        </select>
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="emailAdress"
          placeholder="Email Address"
          type="text"
        />
        <select
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          name="gender"
          id="gender"
        >
          <option className="text-gray-300" value="">
            Select Department
          </option>
          <option value="pm">Project Manager</option>
        </select>
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="designation"
          placeholder="Enter Designation"
          type="text"
        />
        <select
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          name="workingDays"
          id="workingDays"
        >
          <option className="text-gray-300" value="">
            Select Working Days
          </option>
        </select>
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="joinDate"
          placeholder="Select Join Date"
          type="Date"
        />
        <select
          className="outline-0 col-span-6 border rounded-lg h-10 pl-2 pr-2 "
          name="officeLocation"
          id="officeLocation"
        >
          <option className="text-gray-300" value="">
            Select Office Location
          </option>
        </select>
      </div>

      <div className="flex gap-3 w-[100%] justify-end mb-4 mt-4">
        <button
          onClick={() => navigate("/employees")}
          className="flex justify-center items-center gap-1 w-20 h-10 border rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={() => navigate("/employees/add/document")}
          className="flex justify-center items-center gap-1  h-10 w-20 rounded-lg text-white bg-[#7152F3]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfessionalInformationForm;
