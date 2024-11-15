import { useNavigate } from "react-router-dom";
import DragDocument from "../../components/DragDocument";

const DocumentForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-96 w-[100%] grid grid-rows-2 grid-cols-2">
        <div>
          <span className="mb-4">Upload Appointment Letter</span>
          <DragDocument />
        </div>
        <div>
          <span className="mb-4">Upload Salary Slips</span>
          <DragDocument />
        </div>
        <div>
          <span className="mb-4">Upload Reliving Letter</span>
          <DragDocument />
        </div>
        <div>
          <span className="mb-4">Upload Experience Letter</span>
          <DragDocument />
        </div>
      </div>
      <div className="flex gap-3 w-[90%] justify-end mb-4 mt-4">
        <button
          onClick={() => navigate("/employees")}
          className="flex justify-center items-center gap-1 w-20 h-10 border rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={() => navigate("/employees/add/accountAccess")}
          className="flex justify-center items-center gap-1  h-10 w-20 rounded-lg text-white bg-[#7152F3]"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DocumentForm;
