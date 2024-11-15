import React from "react";
import { IconType } from "react-icons";
import { TbTriangleFilled } from "react-icons/tb";

interface Props {
  cardIcon: IconType;
  cardTitle: string;
  totalNumber: number;
}

const DashCard = ({ cardIcon, cardTitle, totalNumber }: Props) => {
  return (
    <div className="rounded-xl border h-[100%] w-[100%]">
      <div className="flex items-center gap-6 pl-8 h-16">
        <div className="bg-[#7152F30D] h-10 w-10 rounded-md flex justify-center items-center">
          {React.createElement(cardIcon, {})}
        </div>
        <h1>{cardTitle}</h1>
      </div>
      <div className="flex h-20 border-b-2 pl-8 gap-44 items-center">
        <h1 className="text-3xl font-bold">{totalNumber}</h1>
        <div className="flex items-center justify-around h-8 w-14 bg-[#30BE821A]">
          <TbTriangleFilled size={10} color="#30BE82" />
          <p className="text-green-500">6%</p>
        </div>
      </div>
      <div className="flex h-10 pl-8 text-gray-400 text-sm items-center">
        <p>Updated: July 10, 2023</p>
      </div>
    </div>
  );
};

export default DashCard;
