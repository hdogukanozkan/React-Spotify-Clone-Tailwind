import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Rafbox = () => {
  return (
    <div className="box p-4 cursor-pointer bg-footer hover:bg-active rounded-md">
      <div className="w-full relative">
        <img
          src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg=="
          className="w-full rounded"
        />
        <span className="absolute right-1  bottom-1 rounded-full overflow-hidden hover:scale-105 transition shadow-black shadow-sm opacity-0">
          <AiFillPlayCircle
            size={40}
            className="text-green-500 transition bg-black scale-125"
          />
        </span>
      </div>
      <h3 className="text-md py-4 font-semibold">Haftalık Keşif</h3>
      <p className="text-gray-300 text-sm font-semibold">
        Lorem ipsum dolor sit dolor sit dolor sit...
      </p>
    </div>
  );
};

export default Rafbox;
