import playerStore from "@/store/playerStore";
import Image from "next/image";
import React, { useCallback } from "react";

interface SongInfo {
  index: number;
  title: string;
  id: string;
  thumbnail: string;
  position: number;
}

interface Props {
  item: SongInfo;
}

const PlayerItem = React.memo(({ item }: Props) => {
  const readVideoId = playerStore((state) => state.readVideoId);

  const onClickHandler = useCallback(() => {
    readVideoId(item);
  }, []);
  return (
    <li
      onClick={onClickHandler}
      className="flex items-center cursor-pointer relative overflow-ellipsis overflow-hidden"
    >
      <div className="w-8 hidden xl:block shrink-0">
        <span>{item.position}</span>
      </div>
      <div className="w-12 h-12 bg-playlist-color-1 mr-4 shrink-0">
        <Image
          className="relative w-auto h-full object-cover object-center"
          width={100}
          height={100}
          src={item.thumbnail}
          alt="thumbnail image"
        />
      </div>
      <div className="min-w-0 shrink-1 overflow-hidden overflow-ellipsis">
        {item?.title}
      </div>
    </li>
  );
});

export default PlayerItem;
