import ProfileInformationCard from "../../../components/ProfileInformationCard"

const ProfessionalInformationDetail = () => {
  return (
    <div className="grid grid-cols-2 mb-6 gap-3">
      <ProfileInformationCard title="Employee ID" content="879912390"/>
      <ProfileInformationCard title="Username" content="brooklyn_simmons"/>
      <ProfileInformationCard title="Employee Type" content="Office"/>
      <ProfileInformationCard title="Email Address" content="brooklyn.s@example.com"/>
      <ProfileInformationCard title="Department" content="Project Manager"/>
      <ProfileInformationCard title="Designation" content="Project Manager"/>
      <ProfileInformationCard title="Working Days" content="5 Days"/>
      <ProfileInformationCard title="Joining Date" content="July 10, 2022"/>
      <ProfileInformationCard lastItem={true} title="Office Location" content="2464 Royal Ln. Mesa, New Jersey"/>
    </div>
  )
}

export default ProfessionalInformationDetail