import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="h-10 px-2 flex items-center justify-center gap-2 w-[364px] bg-white relative rounded-3xl overflow-hidden ">
      <AiOutlineSearch size={30} className="text-black" />
      <input
        type="text"
        className="w-full text-sm h-full flex-auto text-black outline-none"
        placeholder="Ne dinlemek istiyorsun?"
      />
    </div>
  );
};

export default Searchbar;
