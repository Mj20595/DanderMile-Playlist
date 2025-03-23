import {
  faBell,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = React.memo(() => {
  return (
    <>
      <header className="w-full flex justify-between items-center p-4 xl:hidden">
        {/* <div className="text-5xl font-bold">DAY</div> */}
        <div className="text-5xl">DAY</div>
        <div>
          {/* <div className="text-right text-xl font-semibold">D+ 393</div> */}
          <div className="text-right text-xl ">D+ 393</div>
          <div className="text-sm space-x-2 text-black/50 underline">
            <span>#AU</span>
            <span>#Noir</span>
            <span>#Dark</span>
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
