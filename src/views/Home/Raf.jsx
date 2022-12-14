import React from "react";
import Rafbox from "./RafBox";

const kesifList = ({ items }) => {
  return (
    <div className="mt-5">
      <div className="head flex justify-between items-center">
        <h2 className="mb-5 text-2xl tracking-tighter font-semibold font-bold">
          Doğukan Özkan İçin Derlendi
        </h2>
        <span className="font-semibold text-sm font-bold text-gray-200 hover:underline cursor-pointer">
          TÜMÜNÜ GÖSTER
        </span>
      </div>
      <div className="boxs ">
        {items.map((item, i) => (
          <Rafbox item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default kesifList;
