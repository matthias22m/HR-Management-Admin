interface Props{
    title: string,
    content : string,
    lastItem? : boolean
}

const ProfileInformationCard = ({title, content, lastItem = false}:Props) => {
  return (
    <div className={"h-16 "+(lastItem? "": "border-b-2 border-gray-100")}>
      <p className="text-sm mb-1 text-gray-500">{title}</p> <p>{content}</p>
    </div>
  );
};

export default ProfileInformationCard;
