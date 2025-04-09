"use client";

import {
  faBell,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Header = React.memo(() => {
  const [dDay, setdDay] = useState<number>(0);

  useEffect(() => {
    const calcDDay = () => {
      let offset = 1000 * 60 * 60 * 9;
      const today = new Date(Date.now() + offset);
      const start = new Date("2022-10-24");
      const result = today.getTime() - start.getTime();

      return Math.ceil(result / (1000 * 60 * 60 * 24));
    };
    setdDay(calcDDay);
  }, []);

  return (
    <>
      <header className="w-full flex justify-between items-center p-4 xl:hidden">
        <div className="text-5xl">DanderMile</div>
        <div>
          <div className="text-right text-xl ">D+ {dDay}</div>
          <div className="text-base space-x-2 text-black/50 ">
            <span className="whitespace-nowrap">in a field in full bloom</span>
          </div>
        </div>
      </header>
      <header className="w-full xl:flex justify-between items-center h-16 px-6 shrink-0 hidden">
        <div className="flex w-24 space-x-2">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
          <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
          <div className="w-4 h-4 rounded-full border-2 border-gray-500"></div>
        </div>
        <div className="w-fit h-fit bg-white px-4 py-3 flex rounded-full ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="text-gray-500"
          />
          <input
            type="text"
            placeholder="Search..."
            className=" w-96 appearance-none focus:outline-0 ml-2"
          />
        </div>
        <div className="flex w-24 space-x-4 justify-end text-gray-500 ">
          <button className="hover:text-playlist-color-4">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </button>
          <button className="hover:text-playlist-color-4">
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>
      </header>
    </>
  );
});
export default Header;
