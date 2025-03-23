import React from "react";

const Gallery = React.memo(() => {
  return (
    <div className="w-fit h-full bg-white rounded-2xl border-2 border-playlist-color-4 hidden xl:block ">
      <ul className="w-fit h-full p-4 space-y-4 overflow-auto scrollbar-hide">
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_01.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_02.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_03.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_04.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_01.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_02.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_03.jpg')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_04.jpg')]"></div>
        </li>
      </ul>
    </div>
  );
});
export default Gallery;
