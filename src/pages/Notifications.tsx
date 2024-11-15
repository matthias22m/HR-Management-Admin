import { IoPersonOutline } from "react-icons/io5";
import Header from "../components/Header";
import { MdOutlineLock } from "react-icons/md";

const Notifications = () => {
  return (
    <>
      <Header title="Notifications" subTitle="All Notifications" />
      <section className="pl-8 pt-4 mb-10 pr-8 w-[98%] border rounded-lg">
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                src="src/assets/profile/p2.png"
                className="w-10 mr-2 aspect-square inline rounded-[50%]"
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold">Leave Reaquest</div>
              <div className="text-sm mt-1 text-gray-500">
                @Robert Fox has applied for leave
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">Just now</div>
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div className="flex gap-2 items-center">
            <div className="w-10 mr-2 aspect-square inline rounded-[50%]"></div>
            <div>
              <div className="font-semibold">Check In Issue</div>
              <div className="text-sm mt-1 text-gray-500">
                @Alexa shared a message regarding check in issue
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">11:16 AM</div>
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div className="flex gap-2 items-center">
            <div className="w-10 mr-2 aspect-square inline rounded-[50%] place-content-center place-items-center text-[#7152F] bg-[#7152F31A]">
              <IoPersonOutline />
            </div>
            <div>
              <div className="font-semibold">
                Applied job for “Sales Manager” Position
              </div>
              <div className="text-sm mt-1 text-gray-500">
                @shane Watson has applied for job
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">09:00 AM</div>
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div className="flex gap-2 items-center">
            <div>
              <img
                src="src/assets/profile/p4.png"
                className="w-10 mr-2 aspect-square inline rounded-[50%]"
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold">
                Robert Fox has share his feedback
              </div>
              <div className="text-sm mt-1 text-gray-500">
                “It was an amazing experience with your organisation”
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">Yesterday</div>
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <div className="w-10 mr-2 aspect-square inline rounded-[50%] place-content-center place-items-center text-[#7152F] bg-[#7152F31A]">
              <MdOutlineLock />
            </div>
            <div>
              <div className="font-semibold">Password Update successfully</div>
              <div className="text-sm mt-1 text-gray-500">
                Your password has been updated successfully
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">Yesterday</div>
        </div>
      </section>
    </>
  );
};

export default Notifications;
