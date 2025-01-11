import { FaStarHalf } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";

const SideBar = ({ setSelectedMenu, menuSelected }) => {
  return (
    <div className="w-64 h-full flex-col gap-0 flex items-start justify-start border-r-2 shadow-xl">
      <div className="flex p-5 items-center justify-center gap-3">
        <div className="w-fit h-fit p-2 bg-[#5E54C9] text-white rounded-full">
          <FaStarHalf />
        </div>
        <p className="font-black">GSA</p>
      </div>
      <p className="font-bold text-[9px] opacity-30 mt-4 ml-6">OVERVIEW</p>
      {/* Botões */}
      <div className="mt-0 w-full flex-col flex items-center justify-center gap-2">
        <div
          onClick={() => {
            setSelectedMenu("Dashboard");
          }}
          className={`w-11/12 cursor-pointer transition-all duration-300 opacity-50 px-3 flex gap-2 items-center justify-start h-fit py-2 rounded-[3px]  ${
            menuSelected == "Dashboard"
              ? "pointer-events-none text-white bg-[#5E54C9] opacity-100"
              : "hover:text-white hover:bg-[#5E54C9] hover:opacity-100"
          }`}
        >
          <RiDashboardHorizontalFill size={15} className="mt-0.5" />
          <p className="text-xs font-bold">Dashboard</p>
        </div>
        <div
          onClick={() => {
            setSelectedMenu("Clients");
          }}
          className={`w-11/12 cursor-pointer transition-all duration-300 opacity-50 px-3 flex gap-2 items-center justify-start h-fit py-2 rounded-[3px]  ${
            menuSelected == "Clients"
              ? "pointer-events-none text-white bg-[#5E54C9] opacity-100"
              : "hover:text-white hover:bg-[#5E54C9] hover:opacity-100"
          }`}
        >
          <FaUserFriends size={15} className="mt-0.5" />
          <p className="text-xs font-bold">Clients</p>
        </div>
      </div>
      {/* Logout/Settings */}
      <div className="fixed bottom-0 h-28 bg-transparent w-64">
        <p className="font-bold text-[9px] opacity-30 mt-4 ml-6">SETTINGS</p>
        <div className="w-full flex-col gap-1 flex items-center justify-center">
          <div
            onClick={() => {
              setSelectedMenu("Settings");
            }}
            className="w-11/12 cursor-pointer transition-all duration-300 hover:opacity-100 opacity-50 px-3 flex gap-2 items-center justify-start h-fit py-2 rounded-[3px] text-[#5E54C9] hover:text-white hover:bg-[#5E54C9]"
          >
            <IoIosSettings size={15} className="mt-0.5" />
            <p className="text-xs font-bold">Setting</p>
          </div>
          <div
            onClick={() => {
              setSelectedMenu("Logout");
            }}
            className="w-11/12 cursor-pointer transition-all duration-300 hover:opacity-100 opacity-50 px-3 flex gap-2 items-center justify-start h-fit py-2 rounded-[3px] text-red-500 hover:text-white hover:bg-red-500"
          >
            <MdExitToApp size={15} className="mt-0.5" />
            <p className="text-xs font-bold">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
