import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";

interface Props {
  remote?: boolean;
  fullTime?: boolean;
  jobTitle: string;
  category: string;
}

const JobCard = ({
  jobTitle,
  category,
  fullTime = false,
  remote = false,
}: Props) => {
  return (
    <div className="bg-slate-100 h-auto rounded-lg mb-4">
      <div className="flex items-center gap-4 pl-2 h-16">
        {<MdOutlineWorkOutline size={18} />}
        <div>
          <div className="font-semibold">{jobTitle}</div>
          <div className="text-sm text-gray-500">{category}</div>
        </div>
      </div>
      <div className="flex pl-2 pb-4 gap-2">
        <div className="w-20 h-8 rounded-lg place-content-center text-center text-white text-sm bg-[#7152F3]">
          {category}
        </div>
        {fullTime && (
          <div className="w-20 h-8 rounded-lg place-content-center text-center text-white text-sm bg-[#7152F3]">
            Full Time
          </div>
        )}
        {remote && (
          <div className="w-16 h-8 rounded-lg place-content-center text-center text-white text-sm bg-[#7152F3]">
            Remote
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 pb-4">
        <CiLocationOn size={30} />
        California
        <span>
          <span className="font-bold">$3600</span>/Month
        </span>
      </div>
    </div>
  );
};

export default JobCard;
