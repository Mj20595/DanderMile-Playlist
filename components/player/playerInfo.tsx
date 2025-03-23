import playerStore from "@/store/playerStore";
import Image from "next/image";
import React from "react";

const PlayerInfo = React.memo(() => {
  const nowPlay = playerStore((state) => state.nowPlay);

  return (
    <div className="w-72 flex items-center space-x-4 overflow-hidden overflow-ellipsis">
      <div className="w-16 h-16 shrink-0 bg-playlist-color-4 hidden xl:block">
        {nowPlay.thumbnail && (
          <Image
            className="relative w-auto h-full object-cover object-center"
            width={100}
            height={100}
            src={nowPlay?.thumbnail}
            alt="now playing thumbnail"
          />
        )}
      </div>
      <div className="min-w-0 w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center xl:text-left text-xl xl:text-base xl:font-normal">
        {nowPlay.title}
      </div>
    </div>
  );
});

export default PlayerInfo;
