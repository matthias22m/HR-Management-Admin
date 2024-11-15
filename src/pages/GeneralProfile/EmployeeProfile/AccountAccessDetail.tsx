import ProfileInformationCard from "../../../components/ProfileInformationCard"

const AccountAccessDetail = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <ProfileInformationCard title="Email Address" content="brooklyn.s@example.com" />
      <ProfileInformationCard title="Slack ID" content="brooklyn_simmons" />
      <ProfileInformationCard lastItem={true} title="Skypee ID" content="brooklyn_simmons" />
      <ProfileInformationCard lastItem={true} title="Github ID" content="brooklyn_simmons" />
    </div>
  )
}

export default AccountAccessDetail