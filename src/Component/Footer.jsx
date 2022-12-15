import React, { useEffect } from "react";
import Player from "./Footerbar/Player";
import Volume from "./Footerbar/Volume";
import MusicUI from "./Footerbar/MusicUI";
import { useAudio } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying } from "Stores/player";

/* 
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineExpandAlt,
} from "react-icons/ai";
import {
  TbArrowsShuffle,
  TbMicrophone2,
  TbDevices,
  TbRepeat,
} from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { BsVolumeMute, BsVolumeDown, BsVolumeUp } from "react-icons/bs";
import { BiWindow } from "react-icons/bi";
*/

const Footer = () => {
  const { current } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  return (
    <div className="h-24 bg-footer flex flex-row items-center justify-between px-4">
      <MusicUI current={current} />
      <Player audio={audio} controls={controls} ref={ref} state={state} />
      <Volume audio={audio} controls={controls} ref={ref} state={state} />
    </div>
  );
};

export default Footer;
