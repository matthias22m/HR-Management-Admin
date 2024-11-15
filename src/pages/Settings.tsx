import { useState } from "react";
import Header from "../components/Header";
import Toggle from "react-toggle";

const Settings = () => {
  const [twoFactorChecked, setTwoFactorChecked] = useState(false);
  const [mobileNotificationChecked, setMobileNotificationChecked] = useState(false);
  const [desktopNotificationChecked, setDesktopNotificationChecked] = useState(false);
  const [emailNotificationChecked, setEmailNotificationChecked] = useState(false);
  return (
    <>
      <Header title="Settings" subTitle="All System Settings" />
      <section className="pl-8 pt-4 mb-10 pr-8 w-[98%] border rounded-lg">
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div>
            <div className="font-semibold">Appearance</div>
            <div className="text-sm mt-1 text-gray-500">
              Customize how your theme looks on your device
            </div>
          </div>
          <select
            className="bg-gray-100 w-20 h-8 outline-none rounded-lg text-center"
            name=""
            id=""
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div>
            <div className="font-semibold">Language</div>
            <div className="text-sm mt-1 text-gray-500">
              Select your Language
            </div>
          </div>
          <select
            className="bg-gray-100 w-24 h-8 outline-none rounded-lg text-center"
            name=""
            id=""
          >
            <option value="en">English</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div>
            <div className="font-semibold">Two-factor Authentication</div>
            <div className="text-sm mt-1 text-gray-500">
              Keep your account secure by enabling 2FA via email
            </div>
          </div>
          <Toggle
            defaultChecked={twoFactorChecked}
            icons={false}
            onChange={() => setTwoFactorChecked(!twoFactorChecked)}
          />
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div>
            <div className="font-semibold">Mobile push notification</div>
            <div className="text-sm mt-1 text-gray-500">
              Recieve push notification
            </div>
          </div>
          <Toggle
            defaultChecked={mobileNotificationChecked}
            icons={false}
            onChange={() => setMobileNotificationChecked(!mobileNotificationChecked)}
          />
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div>
            <div className="font-semibold">Desktop Notification</div>
            <div className="text-sm mt-1 text-gray-500">
              Recieve push notification in desktop
            </div>
          </div>
          <Toggle
            defaultChecked={desktopNotificationChecked}
            icons={false}
            onChange={() => setDesktopNotificationChecked(!desktopNotificationChecked)}
          />
        </div>
        <div className="h-16 flex w-[100%] justify-between items-center border-b mb-4">
          <div>
            <div className="font-semibold">Email notification</div>
            <div className="text-sm mt-1 text-gray-500">
              Recieve email notification
            </div>
          </div>
          <Toggle
            defaultChecked={emailNotificationChecked}
            icons={false}
            onChange={() => setEmailNotificationChecked(!emailNotificationChecked)}
          />
        </div>
      </section>
    </>
  );
};

export default Settings;
