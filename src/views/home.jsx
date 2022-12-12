import React from "react";

const home = () => {
  return (
    <div className="flex flex-col gap-2 py-8">
      <div className="mb-5">
        <h2 className="mb-5">İyi akşamlar</h2>
        <div className="grid grid-cols-3">
          <div>
            <img src="" alt="" />
            <h3>slow turkish</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>#tbt</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>Pop mix</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>english music</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>Zaman kapsülün</h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3>Daily mix 1</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="head">
          <h2>Doğukan Özkan İçin Derlendi</h2>
          <span>TÜMÜNÜ GÖSTER</span>
        </div>
        <div className="boxs">
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default home;
