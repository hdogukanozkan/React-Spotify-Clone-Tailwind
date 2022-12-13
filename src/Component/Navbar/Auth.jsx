import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Menu } from "@headlessui/react";
const data = {
  imgUrl: "https://avatars.githubusercontent.com/u/77576605?v=4",
  name: "Doğukan Özkan",
};

const Auth = () => {
  return (
    <Menu as="div" className={"relative z-10"}>
      <Menu.Button className="flex justify-between items-center gap-2 bg-black bg-opacity-75 rounded-full h-8 pr-2 hover:bg-active">
        <img
          src={data.imgUrl}
          alt={data.name}
          className="rounded-full h-full"
        />
        <span className="font-semibold">{data.name}</span>
        <span>
          <AiOutlineCaretDown />
        </span>
      </Menu.Button>
      <Menu.Items
        className={
          "p-1 right-0 absolute top-full translate-y-2 w-48 bg-active shadow-2xl font-semibold shadow-black rounded-sm"
        }
      >
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex  items-center px-2 text-sm ${
                active && "bg-white bg-opacity-10"
              }`}
              href="/account-settings"
            >
              Hesap
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex  items-center px-2 text-sm ${
                active && "bg-white bg-opacity-10"
              }`}
              href="/account-settings"
            >
              Profil
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`h-10 flex  items-center px-2 text-sm ${
                active && "bg-white bg-opacity-10"
              }`}
              href="/account-settings"
            >
              Ayarlar
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`border-t-[1px] border-opacity-25 border-t-white h-10 flex  items-center px-2 text-sm ${
                active && "bg-white bg-opacity-10 border-opacity-0"
              }`}
              href="/account-settings"
            >
              Oturumu Kapat
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Auth;

/*  <button className="flex justify-between items-center gap-2 bg-black bg-opacity-75 rounded-full h-8 pr-2 hover:bg-active">
      <img src={data.imgUrl} alt={data.name} className="rounded-full h-full" />
      <span className="font-semibold">{data.name}</span>
      <span>
        <AiOutlineCaretDown />
      </span>
    </button> */
