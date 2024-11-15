import { useNavigate } from "react-router-dom";

const AccountAccessForm = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[98%]">
      <div className="w-[100%] h-36 mt-6 grid grid-rows-2 grid-cols-2 gap-6 rounded-md">
        <input
          className="outline-0 border rounded-lg h-10 pl-2 pr-2 "
          id="emailAddress"
          placeholder="Enter Email Address"
          type="text"
        />
        <input
          className="outline-0 border rounded-lg h-10 pl-2 pr-2 "
          id="stockId"
          placeholder="Enter Stock ID"
          type="text"
        />

        <input
          className="outline-0 border rounded-lg h-10 pl-2 pr-2 "
          id="skypeeId"
          placeholder="Enter Skypee ID"
          type="text"
        />

        <input
          className="outline-0 border rounded-lg h-10 pl-2 pr-2 "
          id="githubId"
          placeholder="Enter Github ID"
          type="text"
        />
      </div>

      <div className="flex gap-3 w-[100%] justify-end mb-4 mt-4">
        <button
          onClick={() => navigate("/employees")}
          className="flex justify-center items-center gap-1 w-20 h-10 border rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={() => navigate("/employees")}
          className="flex justify-center items-center gap-1  h-10 w-20 rounded-lg text-white bg-[#7152F3]"
        >
          Add
        </button>
      </div>
    </div>
  );
};


export default AccountAccessForm;
