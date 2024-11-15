import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineDownloading } from "react-icons/md";

const DocumentDetail = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="flex h-12 border rounded-lg items-center justify-between pl-6 pr-6">
        Appointment Letter.pdf
        <div className="flex gap-3">
          <IoEyeOutline size={23} />
          <MdOutlineDownloading size={20} />
        </div>
      </div>
      <div className="flex h-12 border rounded-lg items-center justify-between pl-6 pr-6">
        Salary Slip_June.pdf
        <div className="flex gap-3">
          <IoEyeOutline size={23} />
          <MdOutlineDownloading size={20} />
        </div>
      </div>
      <div className="flex h-12 border rounded-lg items-center justify-between pl-6 pr-6">
        Salary Slip_April.pdf
        <div className="flex gap-3">
          <IoEyeOutline size={23} />
          <MdOutlineDownloading size={20} />
        </div>
      </div>
      <div className="flex h-12 border rounded-lg items-center justify-between pl-6 pr-6">
        Salary Slip_May.pdf
        <div className="flex gap-3">
          <IoEyeOutline size={23} />
          <MdOutlineDownloading size={20} />
        </div>
      </div>
      <div className="flex h-12 border rounded-lg items-center justify-between pl-6 pr-6">
        Reliving Letter.pdf
        <div className="flex gap-3">
          <IoEyeOutline size={23} />
          <MdOutlineDownloading size={20} />
        </div>
      </div>
      <div className="flex h-12 border rounded-lg items-center justify-between pl-6 pr-6">
        Experience Letter.pdf
        <div className="flex gap-3">
          <IoEyeOutline size={23} />
          <MdOutlineDownloading size={20} />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;
