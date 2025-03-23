"use client";

import PlayerInfo from "./playerInfo";
import PlayerControl from "./playerControl";
import PlayerSound from "./playerSound";

const Player = () => {
  return (
    <footer className="flex flex-col xl:flex-row justify-between items-center w-full h-auto xl:h-24 max-h-60 px-6 pb-6 xl:pb-0 shrink-0 space-y-6 xl:space-y-0">
      <PlayerInfo />
      <PlayerControl />
      <PlayerSound />
    </footer>
  );
};

export default Player;
