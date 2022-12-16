import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Searchbar from "./Searchbar";
import Librarybar from "./Librarybar";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-4 items-center h-[36px]">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="rounded-full w-8 h-8 transition flex items-center justify-center bg-black bg-opacity-75  text-white"
      >
        <AiOutlineLeft size={20} />
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="rounded-full w-8 h-8 transition flex items-center justify-center bg-black bg-opacity-75 text-white"
      >
        <AiOutlineRight size={20} />
      </button>
      <Routes>
        <Route path="/search/" element={<Searchbar />} />
        <Route path="/library/" element={<Librarybar />} />
      </Routes>
    </div>
  );
};

export default Navigation;
