import { TbCameraPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const PersonalInformationForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[98%]">
      <button className="h-16 w-16 place-items-center border rounded-lg">
        <TbCameraPlus size={20} />
      </button>
      <div className="w-[100%] h-96 mt-3 grid grid-rows-6 grid-cols-6 gap-3 rounded-md">
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="firstName"
          placeholder="First Name"
          type="text"
        />
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="lastName"
          placeholder="Last Name"
          type="text"
        />
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="mobileNumber"
          placeholder="Mobile Number"
          type="text"
        />
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="emailAdress"
          placeholder="Email Address"
          type="text"
        />
        <input
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          id="date"
          placeholder="Date of Birth"
          type="Date"
        />
        <select
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          name="martialStatus"
          id="martialStatus"
        >
          <option className="text-gray-300" value="">
            Matrial Status
          </option>
          <option value="married">Married</option>
          <option value="single">Single</option>
        </select>
        <select
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          name="gender"
          id="gender"
        >
          <option className="text-gray-300" value="">
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          className="outline-0 col-span-3 border rounded-lg h-10 pl-2 pr-2 "
          name="nationality"
          id="nationality"
        >
          <option className="text-gray-300" value="">
            Nationality
          </option>
        </select>
        <input
          className="outline-0 col-span-6 border rounded-lg h-10 pl-2 pr-2 "
          id="address"
          placeholder="Address"
          type="text"
        />
        <select
          className="outline-0 col-span-2 border rounded-lg h-10 pl-2 pr-2 "
          name="city"
          id="city"
        >
          <option className="text-gray-300" value="">
            City
          </option>
        </select>
        <select
          className="outline-0 col-span-2 border rounded-lg h-10 pl-2 pr-2 "
          name="state"
          id="state"
        >
          <option className="text-gray-300" value="">
            State
          </option>
        </select>
        <select
          className="outline-0 col-span-2 border rounded-lg h-10 pl-2 pr-2 "
          name="zipCode"
          id="zipCode"
        >
          <option className="text-gray-300" value="">
            Zip Code
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
          onClick={() => navigate("/employees/add/professionalInformation")}
          className="flex justify-center items-center gap-1  h-10 w-20 rounded-lg text-white bg-[#7152F3]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
