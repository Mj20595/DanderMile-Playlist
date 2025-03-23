"use client";

import { faAngleLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import PlayerItem from "./playerItem";
import playerStore from "@/store/playerStore";

const ListContainer = React.memo(() => {
  const [isToggle, setisToggle] = useState(true);
  const classes_1 = `min-w-20 h-full z-20 absolute bg-playlist-color-3 duration-300 rounded-2xl items-center rounded-r-none border-2 border-r-0 border-playlist-color-4 shrink-0 space-y-4 hover:bg-playlist-color-1/80 peer `;
  const playList = playerStore((state) => state.playList);

  const onClickToggleButton = useCallback(() => {
    setisToggle((prev) => !prev);
  }, []);

  return (
    <div className="w-fit xl:flex relative hidden">
      <div className={classes_1 + (!isToggle ? " hidden" : " visible")}>
        <button
          onClick={onClickToggleButton}
          className="w-full h-full p-4 text-left cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </button>
      </div>
      <div
        className={
          "min-w-16 h-full bg-white rounded-2xl border-2 border-playlist-color-4 shrink-0 p-4 space-y-4 overflow-hidden duration-200 peer-hover:w-20 " +
          (!isToggle ? " w-[540px] mr-4 " : "w-16 rounded-r-none border-r-0")
        }
      >
        <div className="flex justify-between items-center">
          <div className="text-5xl font-bold">TRITON</div>
          <div className="flex items-start space-x-5 pr-2">
            <div>
              <div className="text-right">D+ 393</div>
              <div className="text-sm space-x-2 text-black/50 underline">
                <span>#CITY</span>
                <span>#POP</span>
                <span>#ROCK</span>
                <span>#CHILL</span>
              </div>
            </div>
            <button
              onClick={onClickToggleButton}
              className="cursor-pointer hover:text-playlist-color-4"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
        </div>
        <div className="min-w-full w-[504px] h-40 bg-[url('/img/img_02.jpg')] bg-cover bg-center rounded-lg overflow-hidden"></div>
        <div className="min-w-full w-[504px] relative z-0">
          <div className="text-2xl font-bold mb-2">Playlist</div>
          <ul className="space-y-2 whitespace-nowrap h-[250px] overflow-auto scrollbar-hide">
            {playList?.map((item, i) => (
              <PlayerItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default ListContainer;
