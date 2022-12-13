import React from "react";

import LastPlayList from "./Home/LastPlayList";
import Raf from "./Home/Raf";

const home = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  return (
    <div className="flex flex-col gap-5 px-8 mt-6">
      <LastPlayList currentHour={currentHour} />
      <Raf />
      <Raf />
      <Raf />
      <Raf />
      <Raf />
    </div>
  );
};

export default home;
