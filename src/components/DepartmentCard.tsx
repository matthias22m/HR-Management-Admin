import { FaAngleRight } from "react-icons/fa";

interface Props {
  onClick: () => {};
  title: string;
  membersNumber: number;
}

const members = [
  {
    name: "Leslie Alexander",
    position: "Sr. Project Manager",
    image: "src/assets/profile/p1.png",
  },
  {
    name: "Roland Richards",
    position: "Sr. Project Manager",
    image: "src/assets/profile/p2.png",
  },
  {
    name: "Savannah Nguyen",
    position: "Sr. Project Manager",
    image: "src/assets/profile/p3.png",
  },
  {
    name: "Eleanor Pena",
    position: "Sr. Project Manager",
    image: "src/assets/profile/p4.png",
  },
  {
    name: "Esther Howard",
    position: "Sr. Project Manager",
    image: "src/assets/profile/p5.png",
  },
];

const DepartmentCard = ({ title, membersNumber, onClick }: Props) => {
  return (
    <div className="border rounded-lg pl-4 pr-4">
      <div className="flex mb-4 justify-between border-b items-center h-16">
        <div>
          <div className="font-semibold">{title} Department</div>
          <div className="text-sm text-gray-500">{membersNumber} members</div>
        </div>
        <div onClick={onClick} className="text-[#7152F3] cursor-pointer">View All</div>
      </div>
      {members.map((member, index) => (
        <div className="flex justify-between mb-2">
          <div className="flex gap-2" key={index}>
            <img
              className="w-10 aspect-square rounded-[50%]"
              src={member.image}
              alt=""
            />
            <div>
              <div className="text-sm">{member.name}</div>
              <div className="text-xs text-gray-500">{member.position}</div>
            </div>
          </div>
          <FaAngleRight />
        </div>
      ))}
    </div>
  );
};

export default DepartmentCard;
