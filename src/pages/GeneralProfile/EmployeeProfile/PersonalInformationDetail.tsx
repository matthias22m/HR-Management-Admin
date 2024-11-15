import ProfileInformationCard from "../../../components/ProfileInformationCard";

const PersonalInformationDetail = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-6 gap-3 mb-4 w-[100%]">
      <ProfileInformationCard title="First Name" content="Brooklyn"/>
      <ProfileInformationCard title="Last Name" content="Simmons"/>
      <ProfileInformationCard title="Mobile Number" content="(702) 555-0122"/>
      <ProfileInformationCard title="Email Address" content="brooklyn.s@example.com"/>
      <ProfileInformationCard title="Date of Birth" content="July 14,1995"/>
      <ProfileInformationCard title="Martial Status" content="Married"/>
      <ProfileInformationCard title="Gender" content="Female"/>
      <ProfileInformationCard title="Nationality" content="America"/>
      <ProfileInformationCard title="Address" content="2464 Royal Ln. Mesa, New Jersey"/>
      <ProfileInformationCard title="City" content="California"/>
      <ProfileInformationCard lastItem={true} title="State" content="United State"/>
      <ProfileInformationCard lastItem={true} title="ZipCode" content="35624"/>
    </div>
  );
};

export default PersonalInformationDetail;
