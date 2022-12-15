import React from "react";

import LastPlayList from "./Home/LastPlayList";
import Raf from "./Home/Raf";

const home = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const items = [
    {
      id: 1,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 4,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 5,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 6,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 7,
      name: "Haftalık Keşif",
      img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/nNNVCrSt7b9sxBjUws5EsB4li4DA_WW0HqZgeYr_iD71mc-noOUYLusq_CWVcUPMrr5g9EDa13lNyjilN0QZSdDSAwLhuX39hF4N9QDJVz4=/NjA6MzI6MDJUNTItMjEtMg==",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  return (
    <div className="flex flex-col gap-5 px-8 mt-6">
      <LastPlayList currentHour={currentHour} />
      <Raf items={items} />
      <Raf items={items} />
      <Raf items={items} />
      <Raf items={items} />
      <Raf items={items} />
    </div>
  );
};

export default home;
