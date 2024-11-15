const EmployeeProjects = () => {
  return (
    <table className="w-[74%] h-auto overflow-hidden mb-6">
      <thead>
        <tr className="h-14 border-b-2 border-gray-100">
          <th className="text-start text-gray-500 font-normal">Sr No.</th>
          <th className="text-start text-gray-500 font-normal">Project Name</th>
          <th className="text-start text-gray-500 font-normal">Start Date</th>
          <th className="text-start text-gray-500 font-normal">Finish Date</th>
          <th className="text-start text-gray-500 font-normal">Status</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="h-14 border-b-2 border-gray-100">
          <td>1</td>
          <td>AmongUs - Discovery Phase</td>
          <td>Feb 01, 2023</td>
          <td>March 05, 2023</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Completed
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>2</td>
          <td>WildCare - Development Project</td>
          <td>Feb 12, 2023</td>
          <td>April 20, 2023</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Completed
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>3</td>
          <td>Hingustan Web Development</td>
          <td>April 05, 2023</td>
          <td>October 05, 2023</td>
          <td>
          <div className="bg-[#EFBE121A] text-[#EFBE12] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              In Progress
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>4</td>
          <td>Montilisy Ecommerce Platform</td>
          <td>May 12, 2023</td>
          <td>August 12, 2023</td>
          <td>
            <div className="bg-[#EFBE121A] text-[#EFBE12] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              In Progress
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EmployeeProjects