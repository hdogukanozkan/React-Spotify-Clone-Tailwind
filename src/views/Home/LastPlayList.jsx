import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const LastPlayList = ({ currentHour }) => {
  return (
    <div className="mb-5">
      <h2 className="mb-7 tracking-tight text-3xl font-semibold font-bold">
        {currentHour < 6
          ? "İyi geceler"
          : currentHour > 6 && currentHour < 12
          ? "Günaydın"
          : currentHour > 12 && currentHour < 18
          ? "Tünaydın"
          : " İyi akşamlar "}
      </h2>
      <div className="playlistHOME ">
        {new Array(6).fill(
          <div className="flex h-20 flex-row items-center justify-center gap-4 bg-white rounded-md bg-opacity-10 transition hover:bg-opacity-40 cursor-pointer overflow-hidden relative">
            <img
              src="https://mosaic.scdn.co/640/ab67616d00001e0261cd6f5ad7c69b76adbc5419ab67616d00001e02968cc639e5bd788cdb4723acab67616d00001e029a075ccf085b7eb3f6d9b42bab67616d00001e02dd55bb46d8f9ba14059def01"
              className="h-full rounded-sm"
              alt=""
            />
            <h3 className="flex-auto text-white font-semibold">slow turkish</h3>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full overflow-hidden hover:scale-105 transition shadow-black shadow-md opacity-0">
              <AiFillPlayCircle
                size={50}
                className="text-green-500 transition bg-black scale-125"
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LastPlayList;
