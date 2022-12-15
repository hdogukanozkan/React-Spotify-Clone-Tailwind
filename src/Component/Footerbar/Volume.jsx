import React, { useMemo } from "react";
import { Range, getTrackBackground } from "react-range";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { TbMicrophone2, TbDevices } from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { BsVolumeDown, BsVolumeMute, BsVolumeUp } from "react-icons/bs";

const Volume = ({ audio, state, controls, ref }) => {
  const STEP = 0.01;
  const MIN = 0;
  const MAX = 1;

  const BsVolumes = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return <BsVolumeMute size={28} />;
    }

    if (state.volume > 0 && state.volume <= 0.33) {
      return <BsVolumeDown size={28} />;
    }

    if (state.volume > 0.33 && state.volume <= 1) {
      return <BsVolumeUp size={28} />;
    }
  }, [state.volume, state.muted]);

  return (
    <div className="flex flex-row gap-4 items-center text-link ">
      <TbMicrophone2 size={18} className="hover:text-white" />
      <FaList size={18} className="hover:text-white" />
      <TbDevices size={18} className="hover:text-white" />
      <div className="flex items-center gap-1 w-32 flex-auto group">
        <button
          className="group-hover:text-white mr-1"
          onClick={!state.muted ? controls["mute"] : controls["unmute"]}
        >
          {BsVolumes}
        </button>

        <div
          className="flex-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Range
            values={[state?.muted ? 0 : state?.volume]}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              controls.unmute();
              controls.volume(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="w-full flex h-4 group"
                style={{
                  ...props.style,
                }}
              >
                <div
                  ref={props.ref}
                  className={"h-1 w-full rounded"}
                  style={{
                    background: getTrackBackground({
                      values: [state?.muted ? 0 : state?.volume],
                      colors: ["#1db954", "#535353"],
                      min: MIN,
                      max: MAX,
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
        </div>
      </div>

      <AiOutlineExpandAlt size={20} className="hover:text-white " />
    </div>
  );
};

export default Volume;
