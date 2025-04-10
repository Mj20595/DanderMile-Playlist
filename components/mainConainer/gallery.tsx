import React from "react";

const Gallery = React.memo(() => {
  return (
    <div className="w-fit h-full bg-white rounded-2xl border-2 border-playlist-color-4 hidden xl:block ">
      <ul className="w-fit h-full p-4 space-y-4 overflow-auto scrollbar-hide">
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_0.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_9.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_1.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_2.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_8.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_10.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_12.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_3.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_4.png')]"></div>
        </li>

        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_7.png')]"></div>
        </li>

        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_5.png')]"></div>
        </li>

        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_11.png')]"></div>
        </li>
        <li className="w-full h-auto">
          <div className="w-16 h-16 bg-cover bg-center bg-[url('/img/img_6.png')]"></div>
        </li>
      </ul>
    </div>
  );
});
export default Gallery;
