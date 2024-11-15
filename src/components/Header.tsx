import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

import profile_pic from "../assets/profile.jpeg";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-14 mt-[1%] mb-4 flex justify-between items-center bg-[#a2a1a80e]">
      <div className="pl-10 shrink-0">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-500">{subTitle}</div>
      </div>
      <div className="min-w-[460px] h-[100%] flex gap-6 items-center shrink-0">
        <div className="w-34 h-[60%] border shrink- rounded-md flex items-center">
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

        <div
          onClick={() => navigate("/notifications")}
          className="flex items-center justify-center rounded-md h-[60%] w-10 bg-gray-300"
        >
          <IoNotificationsOutline size={20} />
        </div>

        <div className="flex justify-around shrink-0 items-center w-36 border rounded-md h-[70%]">
          <img className="h-8" src={profile_pic} alt="" />
          <div>
            <div className="text-xs font-bold">Robert Allen</div>
            <h5 className="text-xs">HR Manager</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
