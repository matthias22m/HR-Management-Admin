import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarList = ({ icon, text, isActive = false, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`h-[5%] w-[100%] select-none flex items-center pl-10 gap-6 mt-3 ${
        isActive
          ? "relative before:block before:absolute before:left-0 before:h-[100%] before:w-1 before:bg-[#7152F3] bg-[#7252f314]"
          : ""
      }`}
    >
      {React.createElement(icon, {})}
      <h6 className="text-sm">{text}</h6>
    </div>
  );
};

export default SidebarList;
