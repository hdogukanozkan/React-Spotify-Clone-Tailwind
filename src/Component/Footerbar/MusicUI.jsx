import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiWindow } from "react-icons/bi";

const MusicUI = ({ current }) => {
  return (
    <div className="min-w-[180px] flex flex-row">
      {current && (
        <>
          <div className="w-[56px] h-[56px]">
            <img src={current.img} className="w-full" alt="name" />
          </div>
          <div className="flex flex-col ml-[14px] mr-6 justify-center items-start">
            <h3 className="font-semibold text-white font-bold text-sm">
              {current.name}
            </h3>
            <p className="font-semibold text-link text-xs">{current.actor}</p>
          </div>
          <div className="flex items-center gap-3 text-link justify-center">
            <button className={"text-link hover:text-white"}>
              <AiOutlineHeart size={20} />
            </button>
            <button className={"text-link hover:text-white"}>
              <BiWindow size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MusicUI;
