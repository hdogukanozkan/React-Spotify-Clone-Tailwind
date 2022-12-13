import React from "react";
import logo from "Assets/logo.svg";
import Menu from "./Sidebar/Menu";
import PlayList from "./Sidebar/PlayList";
import Download from "./Sidebar/Download";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
      <NavLink to="/" className="px-6 mb-6">
        <img src={logo} className="h-10 " alt="" />
      </NavLink>

      <Menu />
      <PlayList />
      <Download />
    </div>
  );
};

export default sidebar;
