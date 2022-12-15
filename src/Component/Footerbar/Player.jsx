import React from "react";
import { Range, getTrackBackground } from "react-range";

import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import { TbArrowsShuffle, TbRepeat } from "react-icons/tb";

const Player = ({ audio, state, controls }) => {
  const STEP = 0.1;
  const MIN = 0;

  return (
    <div className="flex flex-col gap-2 justify-center items-center max-w-[45.125rem] w-[40%]">
      <div className="flex flex-row gap-4 justify-center items-center ">
        <button className="transition opacity-70 hover:opacity-100">
          <TbArrowsShuffle size={20} />
        </button>
        <button className="transition opacity-70 hover:opacity-100">
          <AiFillStepBackward size={20} />
        </button>
        <button
          className="transition shadow-black  drop-shadow-sm hover:scale-105"
          onClick={() => {
            !state.paused ? controls.pause() : controls.play();
          }}
        >
          {!state.paused ? (
            <AiFillPauseCircle size={40} />
          ) : (
            <AiFillPlayCircle size={40} />
          )}
        </button>
        <button className="transition opacity-70 hover:opacity-100">
          <AiFillStepForward size={20} />
        </button>
        <button className="transition opacity-70 hover:opacity-100">
          <TbRepeat size={20} />
        </button>
      </div>
      <div
        className="flex flex-row items-center gap-2"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {audio}
        <div className="text-[0.788rem] text-white text-opacity-70 font-semibold">
          {new Date(1000 * state?.time).toISOString().substr(14, 5)}
        </div>
        <Range
          values={[state?.time]}
          step={STEP}
          min={MIN}
          max={state?.duration || 1}
          onChange={(values) => controls.seek(values[0])}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="flex-auto flex h-4 group"
              style={{
                ...props.style,
              }}
            >
              <div
                ref={props.ref}
                className={"h-1 w-full rounded"}
                style={{
                  background: getTrackBackground({
                    values: [state?.time],
                    colors: ["#1db954", "#535353"],
                    min: MIN,
                    max: state?.duration || 1,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              className={`h-3 w-3 rounded-full outline-none ${
                !isDragged ? "opacity-0" : " "
              } group-hover:opacity-100 bg-white`}
              {...props}
              style={{
                ...props.style,
                boxShadow: "0px 2px 6px #AAA",
              }}
            />
          )}
        />
        <div className="text-[0.788rem] text-white font-semibold text-opacity-70">
          {new Date(1000 * state?.duration).toISOString().substr(14, 5)}
        </div>
      </div>
    </div>
  );
};

export default Player;
