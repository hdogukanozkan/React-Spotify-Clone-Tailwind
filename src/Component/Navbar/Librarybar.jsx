import React from "react";

const Librarybar = () => {
  return (
    <div className="flex flex-row items-center gap-4 ml-3 h-full">
      <button className="h-full px-4 bg-active rounded-md font-semibold font-bold text-sm">
        Çalma Listeleri
      </button>
      <button className="h-full px-4  rounded-md font-semibold font-bold text-sm">
        Podcast'ler
      </button>
      <button className="h-full px-4  rounded-md font-semibold font-bold text-sm">
        Sanatçılar
      </button>
      <button className="h-full px-4  rounded-md font-semibold font-bold text-sm">
        Albümler
      </button>
    </div>
  );
};

export default Librarybar;
