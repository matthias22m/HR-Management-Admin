const EmployeeLeave = () => {
  return (
    <table className="w-[74%] h-auto overflow-hidden mb-6">
      <thead>
        <tr className="h-14 border-b-2 border-gray-100">
          <th className="text-start text-gray-500 font-normal">Date</th>
          <th className="text-start text-gray-500 font-normal">Duration</th>
          <th className="text-start text-gray-500 font-normal">Days</th>
          <th className="text-start text-gray-500 font-normal">Reporting Manager</th>
          <th className="text-start text-gray-500 font-normal">Status</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 01, 2023</td>
          <td>July 05 - July 08</td>
          <td>3 Days</td>
          <td>Mark Williams</td>
          <td>
            <div className="bg-[#EFBE121A] text-[#EFBE12] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Pending
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>Apr 05, 2023</td>
          <td>Apr 06 - Apr 10</td>
          <td>4 Days</td>
          <td>Mark Williams</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Approved
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>Mar 12, 2023</td>
          <td>Mar 14 - Mar 16</td>
          <td>2 Days</td>
          <td>Mark Williams</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Approved
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>Feb 01, 2023</td>
          <td>Feb 02 - Feb 10</td>
          <td>8 Days</td>
          <td>Mark Williams</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Approved
            </div>
          </td>
        </tr>
        <tr className="h-14 border-gray-100">
          <td>Jan 01, 2023</td>
          <td>Jan 16 - Jan 19</td>
          <td>3 Days</td>
          <td>Mark Williams</td>
          <td>
            <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-24 rounded-lg">
              Rejected
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EmployeeLeave