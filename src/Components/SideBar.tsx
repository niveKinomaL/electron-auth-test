import React from "react";

import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-72 h-full flex-col gap-2 flex items-center justify-start border-r-2 shadow-xl">
      {/* Barra de pesquisa */}
      Text
      <div className="w-11/12 bg-black opacity-10 h-0.5 mt-2"></div>
      {/* Botões */}
      <div className="mt-0 w-full flex-col flex items-center justify-center gap-2">
        <div className="w-11/12 cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-50 px-3 flex gap-2 items-center justify-start h-fit py-2 rounded-[3px] hover:bg-gray-200">
          <RiDashboardHorizontalFill size={15} className="mt-0.5" />
          <p className="text-xs font-bold">Início</p>
        </div>
        <div className="w-11/12 cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-50 px-3 flex gap-2 items-center justify-start h-fit py-2 rounded-[3px] hover:bg-gray-200">
          <FaUserFriends size={15} className="mt-0.5" />
          <p className="text-xs font-bold">Clientes</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
