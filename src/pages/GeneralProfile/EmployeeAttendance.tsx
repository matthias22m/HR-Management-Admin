const EmployeeAttendance = () => {
  return (
    <table className="w-[74%] h-auto overflow-hidden mb-6">
      <thead>
        <tr className="h-14 border-b-2 border-gray-100">
          <th className="text-start text-gray-500 font-normal">Date</th>
          <th className="text-start text-gray-500 font-normal">Check In</th>
          <th className="text-start text-gray-500 font-normal">Check out</th>
          <th className="text-start text-gray-500 font-normal">Break</th>
          <th className="text-start text-gray-500 font-normal">
            Working Hours
          </th>
          <th className="text-start text-gray-500 font-normal">Status</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 01, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              On time
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 02, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              On time
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 03, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              On time
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 04, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              Late
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 05, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              Late
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 08, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              On time
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 09, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              On time
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 10, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              Late
            </div>
          </td>
        </tr>
        <tr className="h-14 border-b-2 border-gray-100">
          <td>July 11, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#3FC28A1A] text-[#3FC28A] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              On time
            </div>
          </td>
        </tr>
        <tr className="h-14 border-gray-100">
          <td>July 12, 2023</td>
          <td>09:23 AM</td>
          <td>07:00 PM</td>
          <td>00:30 Min</td>
          <td>09:02 Hrs</td>
          <td>
            <div className="bg-[#F45B691A] text-[#F45B69] text-xs text-center place-content-center h-8 w-16 rounded-lg">
              Late
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeAttendance;
