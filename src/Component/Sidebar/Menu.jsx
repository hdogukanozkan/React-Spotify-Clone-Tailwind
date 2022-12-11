import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col ">
        <li className="px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 h-10 flex gap-4 items-center text-sm font-semibold transition text-white hover:text-white"
                : "px-4 h-10 flex gap-4 items-center text-sm font-semibold transition text-link hover:text-white"
            }
          >
            <Icon name={"home"} />
            <span>Ana sayfa</span>
          </NavLink>
        </li>
        <li className="px-2">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "px-4 h-10 flex gap-4 items-center text-sm font-semibold transition text-white hover:text-white"
                : "px-4 h-10 flex gap-4 items-center text-sm font-semibold transition text-link hover:text-white"
            }
          >
            <Icon name={"search"} />
            <span>Ara</span>
          </NavLink>
        </li>
        <li className="px-2">
          <NavLink
            to="/library"
            className={({ isActive }) =>
              isActive
                ? "px-4 h-10 flex gap-4 items-center text-sm font-semibold transition text-white hover:text-white"
                : "px-4 h-10 flex gap-4 items-center text-sm font-semibold transition text-link hover:text-white"
            }
          >
            <Icon name={"library"} />
            <span>Kitaplığın</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
