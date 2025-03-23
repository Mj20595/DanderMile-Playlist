"use client";
import playerStore from "@/store/playerStore";
import PlayerItem from "./playerItem";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MobileListContainer = React.memo(() => {
  const playList = playerStore((state) => state.playList);
  const [isToggle, setIsToggle] = useState(false);

  const listButtonHanlder = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <>
      <div
        className={
          "absolute top-20 left-0 w-full h-[calc(100vh-310px)] p-4 overflow-hidden xl:hidden duration-200 ease-in-out " +
          (!isToggle ? "translate-y-[150%]" : "")
        }
      >
        <div className="h-full bg-white/80 backdrop-blur-md p-4 rounded-2xl border-2 border-playlist-color-4 overflow-hidden">
          <div className="text-2xl w-full mb-4">Playlist</div>
          <ul className="h-[calc(100vh-426px)] w-full space-y-2 whitespace-nowrap playlist-title scrollbar-hide overflow-y-scroll overflow-ellipsis text-2xl">
            {playList?.map((item, i) => (
              <PlayerItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 text-gray-500">
        <div className="block xl:hidden">
          <button
            onClick={listButtonHanlder}
            className="cursor-pointer hover:text-gray-700"
          >
            {!isToggle ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
        </div>
      </div>
    </>
  );
});
export default MobileListContainer;
