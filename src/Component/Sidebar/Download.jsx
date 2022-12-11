import React from "react";

const Download = () => {
  return (
    <div className="mt-1 mx-6 cursor-pointer gap-3 flex-shrink-0 h-10 opacity-70 hover:opacity-100 text-sm font-semibold text-white flex items-center justify-start font-bold">
      <svg
        role="img"
        height="24"
        width="24"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-encore-id="icon"
      >
        <path
          fill="#fff"
          d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        ></path>
        <path
          fill="#fff"
          d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"
        ></path>
      </svg>
      <span>Uygulamayı Yükle</span>
    </div>
  );
};

export default Download;
