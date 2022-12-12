import React from "react";
import Navigations from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";

const navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <Navigations />
      <Auth />
    </div>
  );
};

export default navbar;
