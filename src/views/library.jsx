import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const library = () => {
  return (
    <div className="px-8 py-10">
      <h2 className="select-none text-2xl text-white font-semibold font-bold tracking-tight mb-5">
        Çalma Listeleri
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        <div
          className="transition begenilen-sarkiler relative cursor-pointer col-span-2 rounded-lg p-5 min-h-[290px] flex flex-col justify-end overflow-hidden"
          style={{
            background: "linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%",
          }}
        >
          <p className="font-semibold text-gray-200">
            Meghan Trainor NO + Tarkan Geççek + Bora Yeter Bilmez + Imagine
            Dragons Enemy (with JID) - from the series Arcane League of
            Legends...
          </p>
          <h2 className="text-3xl font-semibold font-bold mb-4 mt-6">
            Beğenilen Şarkılar
          </h2>
          <p className="font-semibold font-bold">89 beğenilen şarkı</p>
          <span className="border-none bg-black opacity-0 absolute right-3 bottom-3 h-[50px] w-[50px] overflow-hidden rounded-full hover:scale-105 transition">
            <AiFillPlayCircle
              size={50}
              className="border-none text-green-500 transition scale-150 w-full h-full "
            />
          </span>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <img
            src="https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-tr.jpg"
            alt="test"
            className="w-full rounded-md"
          />
          <h3 className="font-semibold font-bold my-4 text-md">
            Zaman Kapsülün
          </h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Seni zamanın da geri götürecek şarkılarla...
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <img
            src="https://i.scdn.co/image/ab67706f000000025ec3147cb3278e356f6ff4c9"
            alt="test"
            className="w-full rounded-md"
          />
          <h3 className="font-semibold font-bold my-4 text-md">
            Türkçe 70'ler
          </h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Türk hafif müziği, 45'likler ve aranjmanlar devri 70'ler...
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <img
            src="https://i.scdn.co/image/ab67706f00000002290b94142a484500d9572fc6"
            alt="test"
            className="w-full rounded-md"
          />
          <h3 className="font-semibold font-bold my-4 text-md">
            Türkçe 80'ler
          </h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Türkçe popun arabeske, arabeskin Anadolu rocka karıştığı yıllar...
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <img
            src="https://i.scdn.co/image/ab67706f000000026e65f020506feb291e366012"
            alt="test"
            className="w-full rounded-md"
          />
          <h3 className="font-semibold font-bold my-4 text-md">
            Türkçe 2000'ler
          </h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            mp3 çalarların devri ve yepyeni bir milenyum...
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <img
            src="https://i.scdn.co/image/ab67706f00000002d9c35bb892a28bc6dbb2da17"
            alt="test"
            className="w-full rounded-md"
          />
          <h3 className="font-semibold font-bold my-4 text-md">Anadolu Rock</h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Efsanelerin yorumlarıyla saykedelik rock...
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <div className="w-full rounded-md overflow-hidden relative pb-[100%] bg-[url('https://i.scdn.co/image/ab67706c0000da84102961159c0288e0bd44c87a')] bg-cover bg-center"></div>
          <h3 className="font-semibold font-bold my-4 text-md">birkaç parça</h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Oluşturan: misanthrop
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <div className="w-full rounded-md overflow-hidden relative pb-[100%] bg-[url('https://mosaic.scdn.co/300/ab67616d00001e0261cd6f5ad7c69b76adbc5419ab67616d00001e02968cc639e5bd788cdb4723acab67616d00001e029a075ccf085b7eb3f6d9b42bab67616d00001e02dd55bb46d8f9ba14059def01')] bg-cover bg-center"></div>
          <h3 className="font-semibold font-bold my-4 text-md">slow turkish</h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Oluşturan: Doğukan Özkan
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <div className="w-full rounded-md overflow-hidden relative pb-[100%] bg-[url('https://mosaic.scdn.co/300/ab67616d00001e020c13d3d5a503c84fcc60ae94ab67616d00001e028cf9728b9de2396909587e87ab67616d00001e02add8d6858b9e552b769b0d44ab67616d00001e02ecdad1ee6d530eb965d7c51e')] bg-cover bg-center"></div>
          <h3 className="font-semibold font-bold my-4 text-md">
            english music
          </h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Oluşturan: Doğukan Özkan
          </p>
        </div>
        <div className="bg-footer p-4 rounded-md hover:bg-[#202020] cursor-pointer  ease-in duration-200">
          <div className="w-full rounded-md overflow-hidden relative pb-[100%] bg-[url('https://mosaic.scdn.co/300/ab67616d00001e02023db1018bba12eae732abacab67616d00001e027795a558f68bf11b1077ab8bab67616d00001e0281350fc9dff468f498bb8f44ab67616d00001e02e43a8cef01b18891b3d37031')] bg-cover bg-center"></div>
          <h3 className="font-semibold font-bold my-4 text-md">
            ARABESK ÖZEL #
          </h3>
          <p className="font-semibold text-sm text-gray-300 text-ellipsis">
            Oluşturan: Doğukan Özkan
          </p>
        </div>
      </div>
    </div>
  );
};

export default library;
