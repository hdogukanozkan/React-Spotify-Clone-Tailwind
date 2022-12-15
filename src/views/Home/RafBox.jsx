import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "Stores/player";

const Rafbox = ({ item }) => {
  const dispatch = useDispatch();

  const { current, playing, controls } = useSelector((state) => state.player);

  const updateCurrent = () => {
    if (current?.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <div className="box p-4 cursor-pointer bg-footer hover:bg-active rounded-md">
      <div className="w-full relative">
        <img src={item.img} className="w-full rounded" alt="Name" />
        <span className="absolute right-1  bottom-1 rounded-full overflow-hidden hover:scale-105 transition ">
          {current?.id === item.id && playing ? (
            <AiFillPauseCircle
              onClick={updateCurrent}
              size={40}
              className="text-green-500 transition bg-black scale-125 opacity-1"
            />
          ) : (
            <AiFillPlayCircle
              onClick={updateCurrent}
              size={40}
              className="text-green-500 transition bg-black scale-125 opacity-0"
            />
          )}
        </span>
      </div>
      <h3 className="text-md py-4 font-semibold">{item.name}</h3>
      <p className="text-gray-300 text-sm font-semibold">
        Lorem ipsum dolor sit dolor sit dolor sit...
      </p>
    </div>
  );
};

export default Rafbox;
