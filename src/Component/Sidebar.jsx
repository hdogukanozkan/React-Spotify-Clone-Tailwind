import React from "react";
import logo from "Assets/logo.svg";
import Menu from "./Sidebar/Menu";
import PlayList from "./Sidebar/PlayList";
import Download from "./Sidebar/Download";

const sidebar = () => {
  return (
    <div className="w-60 pt-6 flex flex-col bg-black">
      <a className="px-6 mb-6" href="#">
        <img src={logo} className="h-10 " alt="" />
      </a>

      <Menu />
      <PlayList />
      <Download />
    </div>
  );
};

export default sidebar;
