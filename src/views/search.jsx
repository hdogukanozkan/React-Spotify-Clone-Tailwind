import React from "react";

const search = () => {
  const category = [
    {
      id: 1,
      name: "2022 Özeti",
      img: "https://wrapped-images.spotifycdn.com/image/browse-card/wrapped-temp-card.jpg",
      bg_color: "8400E7",
    },
    {
      id: 2,
      name: "Podcast'ler",
      img: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
      bg_color: "E13300",
    },
    {
      id: 3,
      name: "Senin için Hazırlandı",
      img: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
      bg_color: "1E3264",
    },
    {
      id: 4,
      name: "Yeni Çıkanlar",
      img: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
      bg_color: "E8115B",
    },
    {
      id: 5,
      name: "Pop",
      img: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
      bg_color: "148A08",
    },
    {
      id: 6,
      name: "Hip Hop",
      img: "https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1",
      bg_color: "BC5900",
    },
    {
      id: 7,
      name: "Ruh Hali",
      img: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
      bg_color: "E1118C",
    },
    {
      id: 8,
      name: "Popüler",
      img: "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd",
      bg_color: "B02897",
    },
    {
      id: 9,
      name: "Listeler",
      img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      bg_color: "8D67AB",
    },
    {
      id: 10,
      name: "Canlı Etkinlikler",
      img: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
      bg_color: "7358FF",
    },
    {
      id: 11,
      name: "Dans ve Elektronik",
      img: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
      bg_color: "D84000",
    },
    {
      id: 12,
      name: "Rock",
      img: "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
      bg_color: "E91429",
    },
    {
      id: 13,
      name: "Indie",
      img: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
      bg_color: "E91429",
    },
    {
      id: 14,
      name: "Fitness",
      img: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
      bg_color: "777777",
    },
    {
      id: 15,
      name: "Keşfet",
      img: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
      bg_color: "8D67AB",
    },
    {
      id: 16,
      name: "Country",
      img: "https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e",
      bg_color: "D84000",
    },
    {
      id: 17,
      name: "RnB",
      img: "https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c",
      bg_color: "DC148C",
    },
    {
      id: 18,
      name: "K-pop",
      img: "https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a",
      bg_color: "148A08",
    },
    {
      id: 19,
      name: "Chill",
      img: "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
      bg_color: "D84000",
    },
    {
      id: 20,
      name: "Uyku",
      img: "https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0",
      bg_color: "1E3264",
    },
    {
      id: 21,
      name: "Parti",
      img: "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
      bg_color: "537AA1",
    },
    {
      id: 22,
      name: "2022 Özeti",
      img: "https://wrapped-images.spotifycdn.com/image/browse-card/wrapped-temp-card.jpg",
      bg_color: "8400E7",
    },
    {
      id: 23,
      name: "Podcast'ler",
      img: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
      bg_color: "E13300",
    },
    {
      id: 24,
      name: "Senin için Hazırlandı",
      img: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
      bg_color: "1E3264",
    },
    {
      id: 25,
      name: "Yeni Çıkanlar",
      img: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
      bg_color: "E8115B",
    },
    {
      id: 26,
      name: "Pop",
      img: "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
      bg_color: "148A08",
    },
    {
      id: 27,
      name: "Hip Hop",
      img: "https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1",
      bg_color: "BC5900",
    },
    {
      id: 28,
      name: "Ruh Hali",
      img: "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
      bg_color: "E1118C",
    },
    {
      id: 29,
      name: "Popüler",
      img: "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd",
      bg_color: "B02897",
    },
    {
      id: 30,
      name: "Listeler",
      img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      bg_color: "8D67AB",
    },
    {
      id: 31,
      name: "Canlı Etkinlikler",
      img: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
      bg_color: "7358FF",
    },
    {
      id: 32,
      name: "Dans ve Elektronik",
      img: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
      bg_color: "D84000",
    },
    {
      id: 33,
      name: "Rock",
      img: "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
      bg_color: "E91429",
    },
    {
      id: 34,
      name: "Indie",
      img: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
      bg_color: "E91429",
    },
    {
      id: 35,
      name: "Fitness",
      img: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
      bg_color: "777777",
    },
    {
      id: 36,
      name: "Keşfet",
      img: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
      bg_color: "8D67AB",
    },
    {
      id: 37,
      name: "Country",
      img: "https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e",
      bg_color: "D84000",
    },
    {
      id: 38,
      name: "RnB",
      img: "https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c",
      bg_color: "DC148C",
    },
    {
      id: 39,
      name: "K-pop",
      img: "https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a",
      bg_color: "148A08",
    },
    {
      id: 40,
      name: "Chill",
      img: "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
      bg_color: "D84000",
    },
    {
      id: 41,
      name: "Uyku",
      img: "https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0",
      bg_color: "1E3264",
    },
    {
      id: 42,
      name: "Parti",
      img: "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
      bg_color: "537AA1",
    },
    {
      id: 43,
      name: "Canlı Etkinlikler",
      img: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
      bg_color: "7358FF",
    },
    {
      id: 44,
      name: "Dans ve Elektronik",
      img: "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
      bg_color: "D84000",
    },
    {
      id: 45,
      name: "Rock",
      img: "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
      bg_color: "E91429",
    },
    {
      id: 46,
      name: "Indie",
      img: "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
      bg_color: "E91429",
    },
  ];

  return (
    <div className="px-8 py-10">
      <h2 className="select-none text-2xl text-white font-semibold font-bold tracking-tight mb-5">
        Hepsine göz at
      </h2>
      <div className="grid select-none grid-cols-2 gap-4 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {category.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: `#${item.bg_color}` }}
            className="before:pt-[100%] before:block relative  rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition"
          >
            <h3 className="absolute top-0 left-0 p-4 font-semibold font-bold text-2xl select-none">
              {item.name}
            </h3>
            <img
              src={item.img}
              alt={item.name}
              className="select-none absolute bottom-0 right-0 rotate-[25deg] w-24 h-24 rounded scale-110 translate-x-4 translate-y-2"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default search;
