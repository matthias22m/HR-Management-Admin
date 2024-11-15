interface Props {
  title: string;
  subTitle: string;
  time: string;
}

const ScheduleCard = ({title,subTitle,time}:Props) => {
  return (
    <div className="flex">
      <div className="text-lg mb-3 font-semibold place-content-center h-14 w-[20%]">
        {time}
      </div>
      <div className="relative pl-4 place-content-center h-14 w-[80%] before:absolute before:h-[100%] before:left-0 before:w-[2px] before:top-0 before:bg-gradient-to-b from-[#7252f3a5]">
        <p className="text-xs">{title}</p>
        <p className="text-sm font-semibold">{subTitle}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
