import React from "react";

const PlayList = () => {
  return (
    <div className="mt-6 flex flex-col overflow-hidden flex-1 ">
      <div className="flex flex-col ">
        <div>
          <button
            type="button"
            className="text-white opacity-75 transition hover:opacity-100 px-6 py-2 flex flex-row w-full"
          >
            <div className="h-[24px] w-[24px] bg-white flex flex-row items-center justify-center rounded-sm mr-4 ">
              <svg
                role="img"
                height="12"
                width="12"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
              >
                <path
                  d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
                  fill="#000"
                ></path>
              </svg>
            </div>
            <span className="text-left text-sm font-bold ">
              Çalma Listesi Oluştur
            </span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="text-white opacity-75 transition hover:opacity-100 px-6 py-2 flex flex-row w-full "
          >
            <div className="h-[24px] w-[24px] bg-gradient-to-br from-indigo-700 to-indigo-200 flex flex-row items-center justify-center rounded-sm mr-4 ">
              <svg
                role="img"
                height="12"
                width="12"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
              >
                <path
                  d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <span className="text-left text-sm font-bold ">
              Beğenilen Şarkılar
            </span>
          </button>
        </div>
      </div>
      <div className="">
        <hr className="h-[2px] opacity-40 my-4 mx-6 rounded border-none bg-active" />
      </div>
      <div className="ml-6 mr-3 mt-0 flex-auto overflow-auto scrollbar-playListss">
        <ul>
          {new Array(25).fill(
            <li>
              <a
                href="#"
                className="font-semibold text-sm flex h-8 text-link hover:text-white items-center "
              >
                Zaman Kapsülün
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlayList;
